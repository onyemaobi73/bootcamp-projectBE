import express from "express";
import mongoose from "mongoose";

interface iPost {
    title?: string;
    content?: string;
    image?: string;
    avatarID?:string;
    category?:string;
    userID?:string;
    comments?:[];
    views?: Array<string>;
    user?:{}
}

interface iPostData extends iPost, mongoose.Document {}

const postModel = new mongoose.Schema(
    {
        title:{
            type:String,
        },
        content:{
            type:String,
        },
        image:{
            type:String,
        },
        userID:{
            type:String,
        },
        category:{
            type:String,
        },
        avatarID:{
            type:String,
        },
        views:{
            type:String,
        },
        comments:[
            {
                type:mongoose.Types.ObjectId,
            },
        ],
        user:{
            type:mongoose.Types.ObjectId,
            ref: "auths",
        }
    },
    { timestamps: true},
);

export default mongoose.model<iPostData>("posts", postModel)