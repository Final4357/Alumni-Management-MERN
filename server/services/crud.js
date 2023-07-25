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
        let data = await Model.findByIdAndUpdate(
            Req.params.id,
            { $set: Req.body },
            { new: true });
        if(data) return { status: 200, data: data}
        else return { status: "fail", data: data }
    } catch (error) {
        return { status: "fail", data: error.toString()}
    }
}

export const deleteService = async (Req, Model) =>{
    try {
        let data = await Model.deleteMany({_id: Req.params.id})
        if(data) return { status: 200, data: data}
        else return { status: "fail", data: "Something wents wrong."}
    } catch (error) {
        return { status: "fail", data: error.toString()}
    }
}