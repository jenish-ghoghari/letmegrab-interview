import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerData } from "../Constants";
import {
  StyledSliderContainer,
} from "./HeroSection.styled";
const HeroSection = () => {
  const slider = useRef(null);

  const BANNER_SLIDER_SETTINGS = {
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    dots: true,
  };
  return (
    <StyledSliderContainer>
      <Slider ref={slider} {...BANNER_SLIDER_SETTINGS} className="bannerSlider">
        {bannerData.map((data, index) => {
          return (
              <img key={index}src={data.bannerImg} alt={`slider-${index}`}/>
          );
        })}
      </Slider>
    </StyledSliderContainer>
  );
};

export default HeroSection;
