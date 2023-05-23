export const detailsByIDService= async (Req, Model, match, project) => {
    try{
        let data = await Model.aggregate([
            {$match:  match},
            {$project: project},
        ])
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "fail", data: error}
    }
}