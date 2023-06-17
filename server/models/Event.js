import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    topic:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    venue:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    startTime:{
        type: String,
        required: true,
    },
    endTime:{
        type: String,
        required: true,
    },
    openTo:{
        type: [String],
        require: true,
        enum : ['Alumni','Faculty','Staff','Member','Students']
    },
    link:{
        type: String,
    },
    eventWebsite:{
        type: String,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
  },{timestamps: true, versionKey: false}
  );

  export default mongoose.model("Event", EventSchema)