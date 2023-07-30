import mongoose from "mongoose"
import News from "../models/News.js"
import { createService, deleteService, updateService } from "../services/crud.js"
import { detailsByIDService } from "../services/detailsById.js"
import { listService } from "../services/listSevice.js"
import { cloudinaryDeleteImg, productImageUpload } from "../utils/cloudinary.js"
import { createError } from "../utils/error.js"


export const createNews = async (req,res,next) =>{
    if(req.file) req.body.photo = await productImageUpload(req.file, `Alumni-Management/News`)
    let result =await createService(req, News)
    if(result) res.status(200).send(result)
}

export const updateNews = async (req,res,next) =>{
    try {
        const news = await News.findById(
            req.params.id,
        );
        if (!news) return next(createError(404, "News not found."));
        if(req.file){
            if(news.photo.publicId) await cloudinaryDeleteImg(news.photo.publicId)
            req.body.photo = await productImageUpload(req.file, `Alumni-Management/News`)
        }
        let result =await updateService(req, News)
        if(result) res.status(200).send(result)
    } catch (error) {
        next(error);
    }
}

export const deleteNews = async (req,res,next) =>{
    try {
        const news = await News.findById(
            req.params.id,
        );
        if (!news) return next(createError(404, "News not found."));
        await cloudinaryDeleteImg(news.photo.publicId)
        let result=await deleteService(req, News);
        res.status(200).send(result)
    } catch (error) {
        next(err);
    }
}

export const newsList = async (req, res, next) =>{
    let searchRgx = {'$regex': req.query.searchKey, $options: 'i'}
    let searchArray = [{topic: searchRgx}]
    let match = {}
    let project = {userId:0,updatedAt:0}
    let sort = {createdAt: -1}
    
    let result =await listService(req, News, searchArray, match, project, sort)
    if(result) res.status(200).json(result)
}

export const NewsDetailsById = async (req,res,next) =>{
    let match = {
        _id: mongoose.Types.ObjectId(req.params.id)
    }
    let project = {userId:0, updatedAt:0}
    let result =await detailsByIDService(req, News, match, project)
    if(result) res.status(200).json(result)
}