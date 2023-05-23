import Job from "../models/Job.js"
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
    res.status(200).send("Job post has been deleted.")
}

// export const jobList = async (req, res, next) =>{
//     let searchRgx = {'$regex': req.params.searchKey, $options: 'i'}
//     let searchArray = [{firstname: searchRgx},{lastname: searchRgx},{dept: searchRgx},{company: searchRgx},{position: searchRgx}]
//     let match = {expiresAt : { $gt: Date.now() }}
//     let project = {userId:0,email:0,gender:0,isAlumni:0,isAdmin:0,studentId:0,canView:0,createdAt:0,updatedAt:0}
//     let sort = {createdAt: -1}
//     let result =await listService(req, User, searchArray, match, project, sort)
//     if(result) res.status(200).json(result)
// }

export const jobDetailsById = async (req,res,next) =>{
    let match = {
        _id: mongoose.Types.ObjectId(req.params.id)
    }
    let project = {userId:0, updatedAt:0}
    let result =await detailsByIDService(req, User, match, project)
    if(result) res.status(200).json(result)
}