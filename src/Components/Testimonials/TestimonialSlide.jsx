import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import required modules

import Sleep from "./Sleep";


const TestimonialSlide = () => {
    return (
        <div className='md:max-w-7xl md:mx-auto '>
            <Swiper
                slidesPerView={1}
                spaceBetween={6}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },

                }}
                className="mySwiper"
            >
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
                <SwiperSlide><Sleep></Sleep></SwiperSlide>
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

export default TestimonialSlide;
