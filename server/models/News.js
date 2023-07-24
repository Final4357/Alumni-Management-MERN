import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true,
    },
    smallDesc: {
        type: String,
        required: true,
    },
    photo: {
        url: String,
        publicId: String,
    },
    newsFrom:{
        type: String,
        required: true,
    },
    newsLink: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true, versionKey: false }
);

export default mongoose.model("News", NewsSchema)