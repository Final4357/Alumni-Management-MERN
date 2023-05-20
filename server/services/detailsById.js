import mongoose from "mongoose";

export const detailsByIDService= async (Req, Model) => {
    try{
	let queryObj = {
              _id: mongoose.Types.ObjectId(Req.params.id),
              isAlumni: true
	}
        let data = await Model.aggregate([
            {$match:  queryObj},
            {$project:{password:0,gender:0,isAlumni:0,isAdmin:0,studentId:0,createdAt:0,updatedAt:0}},
        ])
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}