import Job from "../models/Job.js"
import mongoose from "mongoose"
import { createService, deleteService, updateService } from "../services/crud.js"
import { detailsByIDService } from "../services/detailsById.js"
import { listService } from "../services/listSevice.js"


export const createJobPost = async (req,res,next) =>{
    let result =await createService(req, Job)
    if(result) res.status(200).send(result)
}

export const updateJobPost = async (req,res,next) =>{
    let result =await updateService(req, Job)
    if(result) res.status(200).send(result)
}

export const deleteJobPost = async (req,res,next) =>{
    let result=await deleteService(req, Job);
    res.status(200).send(result)
}

export const jobList = async (req, res, next) =>{
    const Category = ['Onsite','Remote','Hybrid']
    const Experience = ['Entry','Intermediate','Expert']
    const Type = ['Parttime','Fulltime','Internship','Contractual','Freelance']
    let category 
    let experience 
    let type 
    let sort

    req.query.category ? (category = req.query.category.split(",")) : (category = [...Category]);
    req.query.experience ? (experience = req.query.experience.split(",")) : (experience = [...Experience]);
    req.query.type ? (type = req.query.type.split(",")) : (type = [...Type]);
    let searchRgx = {'$regex': req.query.searchKey, $options: 'i'}
    
    if(req.query.sort==='OldToNew') sort = {createdAt: 1}
    else if(req.query.sort==='FtoC') sort = {deadlineDate: -1}
    else if(req.query.sort==='CtoF') sort = {deadlineDate: 1}
    else sort = {createdAt: -1}

    let searchArray = [{company: searchRgx},{position: searchRgx}]
    let match = { category : { $in: category }, experience: { $in: experience }, type: { $in: type}, deadlineDate: { $gte: new Date() }}
    let project = {userId:0,updatedAt:0}
    
    let result =await listService(req, Job, searchArray, match, project, sort)
    if(result) res.status(200).json(result)
}

export const jobListCreateByOwn = async (req, res, next) =>{
    let searchRgx = {'$regex': req.query.searchKey, $options: 'i'}
    let sort = {createdAt: -1}

    let searchArray = [{company: searchRgx},{position: searchRgx}]
    let match = { userId: mongoose.Types.ObjectId(req.user.id) }
    let project = {updatedAt:0}
    
    let result =await listService(req, Job, searchArray, match, project, sort)
    if(result) res.status(200).json(result)
}

export const jobDetailsById = async (req,res,next) =>{
    let match = {
        _id: mongoose.Types.ObjectId(req.params.id)
    }
    let project = {userId:0, updatedAt:0}
    let result =await detailsByIDService(req, Job, match, project)
    if(result) res.status(200).json(result)
}