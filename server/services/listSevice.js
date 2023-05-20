export const listService = async (Req, Model, SearchArray) =>{
    try {
        let pageNo = Number(Req.params.pageNo);
        let perPage = Number(Req.params.perPage);
        let searchValue = Req.params.searchKey;
        const skipRow = (pageNo - 1) * perPage;
        let data;

        if (searchValue!=="0") {
            let SearchQuery = {$or: SearchArray}
            data = await Model.aggregate([
                {$match: {isAlumni: true}},
                {$project:{password:0,email:0,gender:0,isAlumni:0,isAdmin:0,studentId:0,canView:0,createdAt:0,updatedAt:0}},
                {
                    $facet:{
                        Total: [{$match: SearchQuery}, {$count: 'total'}],
                        Row: [{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}]
                    }
                }
            ])
        } else {
            data = await Model.aggregate([
                {$match: {isAlumni: true}},
                {$project:{password:0,email:0,gender:0,isAlumni:0,isAdmin:0,studentId:0,canView:0,createdAt:0,updatedAt:0}},
                {
                    $facet:{
                        Total: [{$count: 'total'}],
                        Row: [{$skip: skipRow}, {$limit: perPage}]
                    }
                }
            ])
        }
        return { status: "success", data: data}
    } catch (error) {
        return { status: "fail", data: error.toString()}
    }
}