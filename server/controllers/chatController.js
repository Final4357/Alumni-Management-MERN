import mongoose from "mongoose";
import Chat from "../models/Chat.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

export const accessChat = async (req, res, next) => {
    const { userId } = req.body

    let isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user.id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ],
    }).populate("users", "-password").populate("latestMessage");

    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "firstname lastname photo email",
    });

    if (isChat.length > 0) {
        res.status(200).send(isChat[0]);
    } else {
        let chatData = {
            chatName: "sender",
            users: [req.user.id, userId],
        };

        try {
            const createdChat = await Chat.create(chatData);
            const chat = await Chat.findOne({ _id: createdChat._id }).populate(
                "users",
                "-password"
            );
            res.status(200).json(chat);
        } catch (error) {
            next(error)
        }
    }
}

export const fetchChat = async (req, res, next) => {
    try {
        let results = Chat.find({ users: { $elemMatch: { $eq: req.user.id } } })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage.sender")
            .sort({ updatedAt: -1 })
        
     results = await User.populate(results, {
            path: "latestMessage.sender",
            select: "firstname lastname photo",
        });
        res.status(200).send(results)
    } catch (error) {
        next(error)
    }
}


