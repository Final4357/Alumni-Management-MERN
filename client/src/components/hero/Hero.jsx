import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { heroImg } from '../../static/data'

const Hero = () => {
    console.log(heroImg)
    return (
        <Fragment>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className={`hero min-h-[86vh] bg-cover bg-[url('https://i.ibb.co/6R120Ht/Hero-img-01.jpg')]`}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-full flex flex-col gap-6 lg:gap-8">
                                <h1 className="text-3xl lg:text-5xl font-semibold">IIUC Alumni</h1>
                                <h1 className="text-5xl lg:text-8xl font-bold lg:font-extrabold">Welcome Home</h1>
                                <h1 className="text-2xl lg:text-4xl font-semibold">IIUC Alumni Association helps you keep IIUC close wherever you are.</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`hero min-h-[86vh] bg-cover bg-[url('https://i.ibb.co/mDdWRH4/hero-img-2.jpg')]`}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-full flex flex-col gap-6 lg:gap-8">
                                <h1 className="text-3xl lg:text-5xl font-semibold">IIUC Alumni</h1>
                                <h1 className="text-5xl lg:text-8xl font-bold lg:font-extrabold">Welcome Home</h1>
                                <h1 className="text-2xl lg:text-4xl font-semibold">IIUC Alumni Association helps you keep IIUC close wherever you are.</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`hero min-h-[86vh] bg-cover bg-[url('https://i.ibb.co/F3nchFB/hero-img-3.jpg')]`}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-full flex flex-col gap-6 lg:gap-8">
                                <h1 className="text-3xl lg:text-5xl font-semibold">IIUC Alumni</h1>
                                <h1 className="text-5xl lg:text-8xl font-bold lg:font-extrabold">Welcome Home</h1>
                                <h1 className="text-2xl lg:text-4xl font-semibold">IIUC Alumni Association helps you keep IIUC close wherever you are.</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`hero min-h-[86vh] bg-cover bg-[url('https://i.ibb.co/hXtT42J/hero-img-4.jpg')]`}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="w-full flex flex-col gap-6 lg:gap-8">
                                <h1 className="text-3xl lg:text-5xl font-semibold">IIUC Alumni</h1>
                                <h1 className="text-5xl lg:text-8xl font-bold lg:font-extrabold">Welcome Home</h1>
                                <h1 className="text-2xl lg:text-4xl font-semibold">IIUC Alumni Association helps you keep IIUC close wherever you are.</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Fragment>
    )
}

export default Hero
