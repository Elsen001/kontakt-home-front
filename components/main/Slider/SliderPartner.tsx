"use client";
import "./partner.scss";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import logo1 from "../../../assests/images/partner/1.webp";
import logo2 from "../../../assests/images/partner/2.webp";
import logo3 from "../../../assests/images/partner/3.webp";
import logo4 from "../../../assests/images/partner/4.webp";
import logo5 from "../../../assests/images/partner/5.webp";
import logo6 from "../../../assests/images/partner/6.webp";
import logo7 from "../../../assests/images/partner/7.webp";
import logo8 from "../../../assests/images/partner/8.webp";
import logo9 from "../../../assests/images/partner/9.webp";
import logo10 from "../../../assests/images/partner/10.webp";
import logo11 from "../../../assests/images/partner/11.webp";
import logo12 from "../../../assests/images/partner/12.webp";
import logo13 from "../../../assests/images/partner/13.webp";
import logo14 from "../../../assests/images/partner/14.webp";
import logo15 from "../../../assests/images/partner/15.webp";
import logo16 from "../../../assests/images/partner/16.webp";
import logo17 from "../../../assests/images/partner/17.webp";
import logo18 from "../../../assests/images/partner/18.webp";

function SliderPartner() {
  const sliderRef = useRef<Slider | null>(null);
  const partnerImages = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18
  ];

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 990, 
        settings: {
          slidesToShow: 6,  
        }
      },
      {
        breakpoint: 780, 
        settings: {
          slidesToShow: 4,  
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 3,  
        }
      },
    ]
  };
    const [header, setHeader] = useState(true);

  useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 0) {
                  setHeader(false);
              } else {
                  setHeader(true);
              }
          };
  
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <div className="slider-container" style={{margin:!header?"790px auto 10px":"620px auto 10px"}}>
      <Slider ref={sliderRef} {...settings}>
        {partnerImages.map((image, index) => (
          <div key={index} className="slider-item">
            <Image 
              className="img"
              src={image} 
              alt={`Partner ${index + 1}`} 
              width={60}
              height={60}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderPartner;
