import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { BsQuote } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <SectionTitle
        title="TESTIMONIALS"
        subTitle="What Our Clients Say"
      ></SectionTitle>
      <div>
        <div>
          <Swiper 
          navigation={true}
          loop = {true} 
          modules={[Navigation]} 
          className="mySwiper">

            {reviews?.map((review) => (
              <SwiperSlide 
              className="px-28 mb-11" 
              key={review._id}>

                <div className="text-center">
                  <Rating className="mx-auto" style={{ maxWidth: 180 }} value={review.rating} readOnly />
                  <BsQuote className="mx-auto text-7xl"></BsQuote>
                  <p>{review.details}</p>
                  <h1 className="text-2xl mt-5 text-orange-400 font-semibold text-center">
                    {review.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
