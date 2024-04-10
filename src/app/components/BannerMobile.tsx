import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imgUrl() {
  const id = rand(1, 3);
  return `./images/banner-mobile${id}.webp`;
}

function createSlide() {
  return (
    <SwiperSlide>
      <img className="img" src={imgUrl()} alt="" />
    </SwiperSlide>
  );
}

 const BannerMobile = () => {
  return (

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {createSlide()}
        {createSlide()}
        {createSlide()}
        {createSlide()}
      </Swiper>
    
  );
};



export default BannerMobile;