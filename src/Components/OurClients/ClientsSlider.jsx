

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CompanyLogo from './CompanyLogo';
// import required modules



const ClientsSlider = () => {
    return (
        <div className='md:max-w-7xl md:mx-auto mt-16'>
            <Swiper
                slidesPerView={3}
                spaceBetween={4}
                
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 10, // Show 10 slides in view
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide><CompanyLogo/></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
            </Swiper>
            <style>
                                {`
                    /* Change Pagination Bullet Color */
                    .swiper-pagination-bullet {
                    background-color: #C73450 !important;
                    opacity: 0.5;
                    }
                    .swiper-pagination-bullet-active {
                    background-color: #C73450 !important;
                    opacity: 1;
                    }

                    /* Change Navigation Arrows Color */
                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                    color: #C73450 !important;
                    font-size: 34px !important; /* Adjust size if needed */
                    }
                `}
            </style>

        </div>
    );
};

export default ClientsSlider;
