import React, { Fragment } from 'react'
import Topbar from './Topbar'
import Jobsidebar from './Jobsidebar'
import Jobcard from './Jobcard'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { jobListRequest } from '../../api_req/jobrequest'

const Job = () => {
  let category
  let experience
  let type
  let pageNo = useSelector((state) => (state.job.pageNo));
  let perPage = useSelector((state) => (state.job.perPage));
  let searchKey = useSelector((state) => (state.job.searchKey));
  let selectCategory = useSelector((state) => (state.job.selectCategory));
  let selectExperience = useSelector((state) => (state.job.selectExperience));
  let selectType = useSelector((state) => (state.job.selectType));
  let sort = useSelector((state) => (state.job.sort));
  let Jobs = useSelector((state) => (state.job.Jobs));
  let TotalJob = useSelector((state) => (state.job.TotalJob));

  console.log(Jobs)

  const applyFilter = async () => {
    category = selectCategory.length ? selectCategory.join(",") : "";
    experience = selectExperience.length ? selectExperience.join(",") : "";
    type = selectType.length ? selectType.join(",") : "";
    await jobListRequest(pageNo, perPage, searchKey, category, experience, type, sort)
  }

  useEffect(() => {
    (async () => {
      await applyFilter();
    })();
  }, [pageNo, perPage, searchKey, category, experience, type, sort])

  return (
    <Fragment>
      <div className='container mx-auto flex flex-col gap-2  w-full  '>
        <Topbar />
        <div className='flex gap-2 '>
          <Jobsidebar />
          <Jobcard Jobs={Jobs}  TotalJob={TotalJob} />
          {/* <FilterPanel categories={data.categoryList}/> 
        <List products={list}/>  */}
        </div>
      </div>
    </Fragment>
  )
}

export default Job