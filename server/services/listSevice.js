// export const listService = async (Req, Model, SearchArray, match, project, sort) =>{
//     try {
//         let pageNo = Number(Req.params.pageNo);
//         let perPage = Number(Req.params.perPage);
//         let searchValue = Req.params.searchKey;
//         const skipRow = (pageNo - 1) * perPage;
//         let data;

//         if (searchValue!=="0") {
//             let SearchQuery = {$or: SearchArray}
//             data = await Model.aggregate([
//                 {$match: match},
//                 {$project: project},
//                 {
//                     $facet:{
//                         Total: [{$match: SearchQuery}, {$count: 'total'}, {$sort: sort}],
//                         Row: [{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}]
//                     }
//                 }
//             ])
//         } else {
//             data = await Model.aggregate([
//                 {$match: match},
//                 {$project: project},
//                 {
//                     $facet:{
//                         Total: [{$count: 'total'}, {$sort: sort}],
//                         Row: [{$skip: skipRow}, {$limit: perPage}]
//                     }
//                 }
//             ])
//         }
//         return { status: "success", data: data}
//     } catch (error) {
//         return { status: "fail", data: error.toString()}
//     }
// }

export const listService = async (Req, Model, SearchArray, match, project, sort) =>{
    try {
        let pageNo = Number(Req.query.pageNo);
        let perPage = Number(Req.query.perPage);
        let searchValue = Req.query.searchKey;
        const skipRow = (pageNo - 1) * perPage;
        let data;

        if (searchValue!=="0") {
            let SearchQuery = {$or: SearchArray}
            data = await Model.aggregate([
                {$match: { $and : [match] } },
                {$project: project},
                {
                    $facet:{
                        Total: [{$match: SearchQuery}, {$count: 'total'}],
                        Row: [{$match: SearchQuery}, {$skip: skipRow}, {$limit: perPage}, {$sort: sort}]
                    }
                }
            ])
        } else {
            data = await Model.aggregate([
                {$match: { $and : [match] } },
                {$project: project},
                {
                    $facet:{
                        Total: [{$count: 'total'}],
                        Row: [{$skip: skipRow}, {$limit: perPage}, {$sort: sort}]
                    }
                }
            ])
        }
        return { status: "success", data: data}
    } catch (error) {
        return { status: "fail", data: error.toString()}
    }
}