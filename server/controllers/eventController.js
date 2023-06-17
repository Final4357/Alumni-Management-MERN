import Event from "../models/Event.js"
import { createService, deleteService, updateService } from "../services/crud.js"
import { detailsByIDService } from "../services/detailsById.js"
import { listService } from "../services/listSevice.js"


export const createEvent = async (req,res,next) =>{
    let result =await createService(req, Event)
    if(result) res.status(200).send(result)
}

export const updateEvent = async (req,res,next) =>{
    let result =await updateService(req, Event)
    if(result) res.status(200).send(result)
}

export const deleteEvent = async (req,res,next) =>{
    let result=await deleteService(req, Event);
    res.status(200).send(result)
}

export const eventList = async (req, res, next) =>{
    let searchRgx = {'$regex': req.query.searchKey, $options: 'i'}
    let searchArray = [{title: searchRgx},{venue: searchRgx}]
    let match = { date: { $gte: new Date() }}
    let project = {userId:0,updatedAt:0}
    let sort = {date: 1}
    
    let result =await listService(req, Event, searchArray, match, project, sort)
    if(result) res.status(200).json(result)
}

export const EventDetailsById = async (req,res,next) =>{
    let match = {
        _id: mongoose.Types.ObjectId(req.params.id)
    }
    let project = {userId:0, updatedAt:0}
    let result =await detailsByIDService(req, Event, match, project)
    if(result) res.status(200).json(result)
}