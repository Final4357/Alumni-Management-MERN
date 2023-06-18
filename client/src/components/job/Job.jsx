import React, { Fragment } from 'react'
import Topbar from './Topbar'
import Jobsidebar from './Jobsidebar'
import Jobcard from './Jobcard'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { jobListRequest } from '../../api_req/jobrequest'
import store from '../../redux/store/store'
import { setClear } from '../../redux/state/jobslice'

const Job = () => {
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
  let Clear = useSelector((state) => (state.job.Clear)); 


  const applyFilter = async () => {
    if ( searchKey.length || selectExperience.length || selectType.length || sort.length || selectCategory.length)
      store.dispatch(setClear(false))
    else
      store.dispatch(setClear(true))
      
    experience = selectExperience.length ? selectExperience.join(",") : "";
    type = selectType.length ? selectType.join(",") : "";

    await jobListRequest(pageNo, perPage, searchKey, selectCategory, experience, type, sort)
  }

 

  useEffect(() => {
    (async () => {
      await applyFilter();
    })();
  }, [pageNo, perPage, searchKey, selectCategory, selectExperience, selectType, sort])




    

  return (
    <Fragment>
      <div className='container mx-auto flex flex-col gap-2  w-full  '>
        <Topbar />
        <div className='flex gap-2 '>
          <Jobsidebar />
          <Jobcard Jobs={Jobs} TotalJob={TotalJob} />
        </div>
      </div>
    </Fragment>
  )
}

export default Job