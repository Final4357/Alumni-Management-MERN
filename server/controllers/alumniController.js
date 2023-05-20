import User from "../models/User.js"
import { detailsByIDService } from "../services/detailsById.js"
import { listService } from "../services/listSevice.js"

export const alumniList = async (req, res, next) =>{
    let searchRgx = {'$regex': req.params.searchKey, $options: 'i'}
    let searchArray = [{firstname: searchRgx},{lastname: searchRgx},{dept: searchRgx},{company: searchRgx},{position: searchRgx}]
    let result =await listService(req, User, searchArray)
    if(result) res.status(200).json(result)
}

export const alumniDetailsById = async (req,res,next) =>{
    let result =await detailsByIDService(req, User)
    if(result) res.status(200).json(result)
}