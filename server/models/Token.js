import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    token:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
      },
    expiresAt: {
        type: Date,
        required: true,
    },
  },{timestamps: true}
  );

  export default mongoose.model("Token", TokenSchema)