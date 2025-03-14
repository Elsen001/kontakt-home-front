"use client"
import "./slider.scss"
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import gif from "../../../assests/images/giphy.gif";
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { AppDispatch, RootState } from '@/redux/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getproductOffer, selectproductOffer } from '@/redux/reducers/ProductOfferReducer';
import CountdownTimer from './OfferTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { getsliderOffer, selectSliderOffer } from "@/redux/reducers/SliderReducer";
import { OfferItems } from "@/types/types";
import { addToCart } from "@/redux/reducers/AddToCartReducer";
import iconCheck from "../../../assests/images/checkj.svg";
import Image from "next/image";

const Slider = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sliderOffer = useSelector(selectSliderOffer);
  const productOffer = useSelector(selectproductOffer);
  const cart = useSelector((state: RootState) => state.cart.cart); 
  const [loading, setLoading] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (item: OfferItems) => {
    setLoading(String(item.id)); 
    dispatch(addToCart(item));

    setTimeout(() => {
      setLoading(null); 
      setCartItems(prev => [...prev, String(item.id)]); 
    }, 1000);
  };


  useEffect(() => {
    if (sliderOffer.length === 0) {
      dispatch(getsliderOffer());
    }

  }, [dispatch, sliderOffer.length]);

  useEffect(() => {
    if (productOffer.length === 0) {
      dispatch(getproductOffer());
    }

  }, [dispatch, productOffer.length]);

  return (
    <div className='SliderContainer'>
      <section className="section-1">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={10}
          autoplay={{ delay: 3500, disableOnInteraction: false, }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            sliderOffer?.map((item) => (
              <SwiperSlide >
                <Link key={item.id} href={"/"}>
                  <img src={item.image} alt="" />
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
      <section className="section-2">
        <div className="time"><CountdownTimer /></div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 7500, disableOnInteraction: false, }}
          modules={[Pagination, Autoplay]}
          className="mySwiper2"
        >
          {
            productOffer.map((item) => (

              <SwiperSlide className="slider2" >
                <Link key={item.id} href={`/item/${item.id}`}>
                  <div className="offer-head">
                    <div>
                      <div className="product-title">{item.name.slice(0, 50)}</div>
                      <p><span>{item.price}₼</span> <span>{item.oldPrice}₼</span></p>
                      <div className="month">0% 18 ay</div>
                    </div>
                    <img src={item.image} alt="" />
                  </div>
                </Link>
                <div className="offer-footer">
                  <button className={cartItems.includes(String(item.id)) ? "inCartSlider" : ""}
                    onClick={() => handleAddToCart(item)}>
                    {cartItems.includes(String(item.id))
                      ? <Image src={iconCheck} alt="" />
                      : <FontAwesomeIcon icon={faCartShopping} className='icon icon-shopping ' />}
                    <span>{cartItems.includes(String(item.id)) ? "Səbətdə" : "Səbətə at"}</span>
                    {loading === String(item.id) && <span className="spin"><Image src={gif} alt="loading..." /></span>}
                  </button>

                  <Link href={"/"}>Bütün təklifləri gör</Link>
                </div>
              </SwiperSlide>

            ))
          }
        </Swiper>
      </section>
    </div>
  )
}

export default Slider
