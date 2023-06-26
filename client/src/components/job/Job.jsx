import React, { Fragment } from 'react'
import Topbar from './Topbar'
import Jobsidebar from './Jobsidebar'
import Jobcard from './Jobcard'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { jobListRequest } from '../../api_req/jobrequest'
import store from '../../redux/store/store'
import { setClear, setloading } from '../../redux/state/jobslice'
import { setShowFilter } from '../../redux/state/settingSlice'

const Job = () => {
  let experience
  let type
  
  let showFilter = useSelector((state) => (state.setting.showFilter));
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
    store.dispatch(setloading(true))
    if (searchKey.length || selectExperience.length || selectType.length || sort.length || selectCategory.length)
      store.dispatch(setClear(false))
    else
      store.dispatch(setClear(true))

    experience = selectExperience.length ? selectExperience.join(",") : "";
    type = selectType.length ? selectType.join(",") : "";

    await jobListRequest(pageNo, perPage, searchKey, selectCategory, experience, type, sort)
    store.dispatch(setloading(false))
  }

  useEffect(() => {
    (async () => {
      await applyFilter();
    })();
  }, [pageNo, perPage, searchKey, selectCategory, selectExperience, selectType, sort])






  return (
    <Fragment>
      <div className='w-full px-[1rem] md:px-[3rem] lg:px-[5rem] flex flex-col gap-2 pb-6 lg:pb-10'>
        <Topbar />
        <div className='flex gap-2 '>
          <div className='hidden lg:block'>
            <Jobsidebar />
          </div>
          <Jobcard Jobs={Jobs} TotalJob={TotalJob} perPage={perPage} />
        </div>
      </div>
      <div className={`${showFilter ? 'fixed' : 'hidden'} h-full w-full z-50 left-0 top-0 transition duration-300 ease-in-out`}>
        <div onClick={()=> store.dispatch(setShowFilter(false))} className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-30"></div>
        <div className='h-full w-full flex items-center justify-center px-4'>
          <Jobsidebar />
        </div>
      </div>
    </Fragment>
  )
}

export default Job