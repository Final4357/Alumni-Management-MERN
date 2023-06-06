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
    category:{
        type: String,
        required: true,
        // enum: ['Onsite','Remote','Hybrid']
    },
    experience:{
        type: String,
        required: true,
        // enum: ['Entry','Intermediate','Expert']
    },
    type:{
        type:String,
        require: true,
        // enum : ['PartTime','FullTime','Internship','Contractual','Freelance']
    },
    link:{
        type: String,
        require: true
    },
    deadlineDate:{
        type: Date,
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