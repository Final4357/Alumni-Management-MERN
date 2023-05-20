import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    position:{
        type: String,
        required: true,
    },
    company:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },
    salary:{
        type: String,
        required: true,
    },
    site:{
        type:String,
        require: true
    },
    link:{
        type: String,
        require: true
    },
    deadlineDate:{
        type: String,
        require: true
    },
    details:{
        type: String,
        require: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
  },{timestamps: true, versionKey: false}
  );

  export default mongoose.model("Job", JobSchema)