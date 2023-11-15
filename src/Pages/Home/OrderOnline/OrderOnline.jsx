import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import photo1 from "../../../assets/home/slide1.jpg"
import photo2 from "../../../assets/home/slide2.jpg"
import photo3 from "../../../assets/home/slide3.jpg"
import photo4 from "../../../assets/home/slide4.jpg"
import photo5 from "../../../assets/home/slide5.jpg"



const OrderOnline = () => {
  return (
    <div>
      <SectionTitle
        title="order online"
        subTitle="From 11.00am to 10.00pm"
      ></SectionTitle>
      <div className="mb-6">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={5}
          pagination = {true}
          loop={true}
          slidesPerView={4}
        >
          <SwiperSlide className="p-2 pb-10">
            <img src={photo1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2 pb-10">
            <img src={photo2} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2 pb-10">
            <img src={photo3} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2 pb-10">
            <img src={photo4} alt="" />
          </SwiperSlide>
          <SwiperSlide className="p-2 pb-10">
            <img src={photo5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
