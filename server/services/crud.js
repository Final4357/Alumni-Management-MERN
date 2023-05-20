export const createService = async (Req, Model) =>{
    try {
        let postBody = Req.body
        postBody.userId = Req.user.id;
        let data = await Model.create(postBody)
        return { status: "success", data: data}
    } catch (error) {
        return { status: "fail", data: error.toString()}
    }
}

export const updateService = async (Req, Model) =>{
    try {
        let data = await Model.updateOne({_id: Req.params.id, userId: Req.user.id}, Req.body)
        return { status: "success", data: data}
    } catch (error) {
        return { status: "fail", data: error.toString()}
    }
}

export const deleteService = async (Req, Model) =>{
    try {
        let data = await Model.deleteMany({_id: Req.params.id, userId: Req.user.id})
        return { status: "success", data: data}
    } catch (error) {
        return { status: "fail", data: error.toString()}
    }
}