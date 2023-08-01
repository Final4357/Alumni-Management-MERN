export const listService = async (Req, Model, SearchArray, match, project, sort) => {
    try {
        let pageNo = Number(Req.query.pageNo);
        let perPage = Number(Req.query.perPage);
        let searchValue = Req.query.searchKey;
        const skipRow = (pageNo - 1) * perPage;
        let data;

        if (searchValue !== "0") {
            let SearchQuery = { $or: SearchArray }
            data = await Model.aggregate([
                { $match: { $and: [match] } },
                { $project: project },
                {
                    $facet: {
                        Total: [{ $match: SearchQuery }, { $count: 'total' }],
                        Row: [{ $match: SearchQuery }, { $sort: sort }, { $skip: skipRow }, { $limit: perPage }]
                    }
                }
            ])
        } else {
            data = await Model.aggregate([
                { $match: { $and: [match] } },
                { $project: project },
                {
                    $facet: {
                        Total: [{ $count: 'total' }],
                        Row: [{ $sort: sort }, { $skip: skipRow }, { $limit: perPage }]
                    }
                }
            ])
        }
        return { status: "success", data: data }
    } catch (error) {
        return { status: "fail", data: error.toString() }
    }
}