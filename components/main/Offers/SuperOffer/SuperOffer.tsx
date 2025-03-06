"use client";
import "./super.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import gif from "../../../../assests/images/giphy.gif";
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css/scrollbar';
import { FaRegHeart } from 'react-icons/fa6';
import { FaBalanceScale } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useState } from "react";
import { addToCart } from "@/redux/reducers/AddToCartReducer";
import { OfferItems } from "@/types/types";

import { addToBalanced } from "@/redux/reducers/BalancedReducer";



interface productOfferProps {
    productOfferItems: OfferItems[]
}

const SuperOffer: React.FC<productOfferProps> = ({ productOfferItems }) => {

    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart.cart);
    const balanced = useSelector((state: RootState) => state.balanced.balanced)
    const [loading, setLoading] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<string[]>([]);
    const [balanceItems, setBalanceItems] = useState<string[]>([]);

    const handleAddToBalance = (item: OfferItems) => {
        dispatch(addToBalanced(item));
        setBalanceItems(prev => [...prev, String(item.id)]);

    }

    const handleAddToCart = (item: OfferItems) => {
        setLoading(String(item.id));
        dispatch(addToCart(item));

        setTimeout(() => {
            setLoading(null);
            setCartItems(prev => [...prev, String(item.id)]);
        }, 1000);
    };

    function calc(a: number, b: number): number {
        return Math.round(((a - b) / a) * 100);
    }




    return (
        <div className="super-offer">
            <div className="super-title">Super təkliflər</div>
            <Swiper
                slidesPerView={1.8}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                     {
                    productOfferItems.map((i, index) => {
                        const isInCart = cart.some(cartItem => cartItem.id === i.id);

                        return (
                            <SwiperSlide key={index}>
                                <Link href={`/item/${i.id}`}>
                                    <img src={i.image} alt="" />
                                    <span className="sale-percent">{calc(i.price, i.oldPrice)}%</span>
                                </Link>
                                <div className="content-product">
                                    <div className="product-title">{i.name.slice(0, 27)}</div>
                                    <div className="product-price-cart">
                                        <div className="sale"><span>{(i.price - i.oldPrice).toFixed(0)}₼</span></div>
                                        <div className="price-container">
                                            <div className='price-item'>
                                                <div className="price-before">{i.price}₼</div>
                                                <div className="price-after">{i.oldPrice}₼</div>
                                            </div>
                                            <div className='credit-month'>0% 6 ay</div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button><FaRegHeart className="icon" /></button>
                                            <button onClick={() => handleAddToBalance(i)}><FaBalanceScale className={balanceItems.includes(String(i.id)) ? "fa-balance icon" : "icon"} /></button>
                                            <button
                                                className={cartItems.includes(String(i.id)) ? "inCart" : ""}
                                                onClick={() => handleAddToCart(i)}
                                            >
                                                <FontAwesomeIcon icon={faCartShopping} className='icon icon-shopping ' />
                                                <span>{cartItems.includes(String(i.id)) ? "Səbətdə" : "Səbətə at"}</span>
                                                {loading === String(i.id) && <span className="spin"><Image src={gif} alt="loading..." /></span>}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        );
                    })
                }

            </Swiper>
        </div>
    );
};
export default SuperOffer
