import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    gender:{
        type:String,
        require: true
    },
    photo:{
            url: String,
            publicId: String
    },
    isAlumni:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    studentId:{
        type: String,
        require: true
    },
    dept:{
        type: String,
        require: true
    },
    batch:{
        type: String,
    },
    company:{
        type: String,
    },
    position:{
        type: String,
    },
    degree:{
        type: String,
    },
    phone:{
        type: String,
    },
    address:{
        type: String,
    },
    canView:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    }],
  },{timestamps: true, versionKey: false}
  );

  UserSchema.pre("save", async function(next){
    if (!this.isModified("password")) {
        return next();
    }
    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hashSync(this.password, salt);
    next();
  })

  export default mongoose.model("User", UserSchema)