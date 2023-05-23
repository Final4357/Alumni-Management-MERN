export const listService = async (Req, Model, SearchArray, match, project, sort) =>{
    try {
        let pageNo = Number(Req.params.pageNo);
        let perPage = Number(Req.params.perPage);
        let searchValue = Req.params.searchKey;
        const skipRow = (pageNo - 1) * perPage;
        let data;

        if (searchValue!=="0") {
            let SearchQuery = {$or: SearchArray}
            data = await Model.aggregate([
                {$match: match},
                {$project: project},
                {
                    $facet:{
                        Total: [{$match: SearchQuery}, {$count: 'total'}, {$sort: sort}],
                        Row: [{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}]
                    }
                }
            ])
        } else {
            data = await Model.aggregate([
                {$match: match},
                {$project: project},
                {
                    $facet:{
                        Total: [{$count: 'total'}, {$sort: sort}],
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