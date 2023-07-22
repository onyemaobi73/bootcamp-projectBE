import express from "express";
import mongoose from "mongoose";

interface iComment {
  comment?: string;
  userName?: string;
  userAvatar?: string;
  post?: {};
}

interface iCommentData extends iComment, mongoose.Document {}

const commentModel = new mongoose.Schema(
  {
    comment: {
      type: String,
    },

    userName: {
      type: String,
    },

    userAvatar: {
      type: String,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "posts",
    },
  },
  { timestamps: true },
);

export default mongoose.model<iCommentData>("comments", commentModel);
