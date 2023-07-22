import mongoose from "mongoose";

export interface iAuth {
  userName?: string;
  email?: string;
  password?: string;
  avatar?: string;
  post?: [];
}

interface iAuthData extends iAuth, mongoose.Document {}

const authModel = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  avatar: {
    type: String,
  },
  post: [
    {
      type: mongoose.Types.ObjectId,
      ref: "post",
    },
  ],
},
{ timestamps: true},
);

export default mongoose.model<iAuthData>("users", authModel);
