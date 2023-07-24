import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store/store'
import { setPageNo } from '../redux/state/newsSlice'
import { useEffect } from 'react'
import { newsListRequest } from '../api_req/newsRequest'
import Header from '../components/Layout/Header'
import NewsCard from '../components/news/NewsCard'
import ReactPaginate from 'react-paginate'
import Footer from '../components/Layout/Footer'

const NewsPage = () => {
    const pageNo = useSelector((state) => state.news.pageNo)
    const newsList = useSelector((state) => state.news.newsList)
    const TotalNews = useSelector((state) => state.news.Total)

    useEffect(() => {
        (async () => {
            await newsListRequest(pageNo, 6);
        })();
    }, [pageNo])

    const handlePageClick = (e) => {
        store.dispatch(setPageNo(e.selected + 1))
    }

    return (
        <Fragment>
            <Header />
            <div className='relative'>
                <img className='h-[45vh] md:h-[65vh] lg:h-[80vh] w-full object-cover' src="https://i.ibb.co/tz7hPPD/Event-image.jpg" />
                <div className='top-0 left-0 bg-gray-800 w-full h-full absolute bg-opacity-30 flex items-center justify-center'>
                    <div className='space-y-4 text-center'>
                        <h3 className="mb-5 text-2xl text-white font-medium">News & Stories</h3>
                        <h1 className="mb-5 text-4xl md:text-7xl text-white font-bold">Research. Profiles. Perspectives.</h1>
                    </div>
                </div>
            </div>
            <div className='w-full px-[1rem] md:px-[2rem] lg:px-[5rem] py-5'>
                <div className='w-full py-8 text-center space-y-5'>
                    <h1 className='text-4xl md:text-7xl font-bold'>News</h1>
                    <h4 className='text-lg lg:text-2xl font-semibold'>The top news that got us thinking this month.</h4>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-3">
                    {
                        newsList?.map((item, i) =>
                            <NewsCard key={i} topic={item.topic} newsFrom={item.newsFrom} smallDesc={item.smallDesc} url={item.newsLink} imgURL={item.photo.url} />
                        )
                    }
                </div>

                <div className='flex w-full justify-center py-8 '>
                    <nav aria-label="Page navigation example" style={{ display: 'flex', justifyContent: 'center' }}>
                        <ReactPaginate className='pagination gap-2'
                            previousLabel="<"
                            nextLabel=">"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            pageCount={Math.ceil(TotalNews / 6)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </nav>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default NewsPage
