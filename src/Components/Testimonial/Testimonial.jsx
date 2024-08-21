import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import quote from "../../assets/img/testimonial/quote.png";
import man1 from "../../assets/img/testimonial/man1.png";
import man2 from "../../assets/img/testimonial/man2.png";
import man3 from "../../assets/img/testimonial/man3.png";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";
import Partner from "../Partner/Partner";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";


const Testimonial = () => {
  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
            Testimonial
          </span>
          <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
            Happy Words From Happy
            <span className="d-block"> Customer </span>
          </h2>
          <Partner />
        </div>
      

      </div>
    </section>
  );
};

export default Testimonial;
