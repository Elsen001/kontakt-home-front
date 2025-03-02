"use client";
import "./Sales.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import gif from "../../../../assests/images/giphy.gif";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppDispatch } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItems, selectCategoryItems } from "@/redux/reducers/CategoryReducer";
import { TbTruckDelivery } from "react-icons/tb";
import { addToCart } from "@/redux/reducers/AddToCartReducer";
import { RootState } from "@/redux/store/store";
import { OfferItems } from "@/types/types";
import { FaRegHeart } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { addToBalanced } from "@/redux/reducers/BalancedReducer";


interface productOfferProps {
    productOfferItems: OfferItems[]
}

const SalesLeaders: React.FC<productOfferProps> = ({ productOfferItems }) => {

    const balanced = useSelector((state: RootState) => state.balanced.balanced)
    const dispatch = useDispatch<AppDispatch>();
    const categoryItems = useSelector(selectCategoryItems);
    const cart = useSelector((state: RootState) => state.cart.cart);
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
        }, 1000);
    };

    const isInCart = (id: number) => cart.some(cartItem => cartItem.id === id);

    useEffect(() => {

    }, [balanced])

    useEffect(() => {
        if (categoryItems.length === 0) {
            dispatch(getCategoryItems());
        }

    }, [dispatch, categoryItems]);

    function calc(a: number, b: number): number {
        return Math.round(((a - b) / a) * 100);
    }

    return (
        <section className="section-sales scstop">
            <div className="special-slider-container">
                <div className="sales-leaders">
                    <h4>Satış liderləri</h4>
                    <div>
                        {categoryItems.slice(0, 16).map((item, index) => (
                            <button key={index}>{item.name}</button>
                        ))}
                    </div>
                </div>
                <Swiper slidesPerView={5.3}
                    spaceBetween={10}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.8,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1.8,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 1.8,
                            spaceBetween: 10,
                        },
                        1225: {
                            slidesPerView: 5.3,
                            spaceBetween: 10,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}  >
                    {productOfferItems.map((i, index) => {

                        return (
                            <SwiperSlide key={index}>
                                <div className="prd">
                                    <div className="truck">
                                        <span><TbTruckDelivery className="truck-icon" /> 2saat/0.0₼</span>
                                    </div>
                                    <Link href={`/item/${i.id}`}>
                                        <img src={i.image} alt="" />
                                    </Link>
                                    <div className="sale-percent">{calc(i.price, i.oldPrice)}%</div>
                                    <div className="article">
                                        <div className='card-title'>{i.name.slice(0, 27)}</div>
                                        <span className='sale'>{(i.price - i.oldPrice).toFixed(0)}₼</span>
                                        <div className="price-container">
                                            <div className='price-item'>
                                                <div className="price-before">{i.oldPrice}₼</div>
                                                <div className="price-after">{i.price}₼</div>
                                            </div>
                                            <div className='credit-month'>0% 6 ay</div>
                                        </div>
                                        <div className="add-to-cart">
                                            <button><FaRegHeart />
                                            </button>
                                            <button onClick={() => handleAddToBalance(i)}><FaBalanceScale className={balanceItems.includes(String(i.id)) ? "fa-balance" : ""} /></button>
                                            <button
                                                className={isInCart(Number(i.id)) ? "inCart" : ""}
                                                onClick={() => handleAddToCart(i)}
                                            >
                                                <FontAwesomeIcon icon={faCartShopping} className='icon icon-shopping ' />
                                                <span>{isInCart(Number(i.id)) ? "Səbətdə" : "Səbətə at"}</span>
                                                {loading === String(i.id) && <span className="spin"><Image src={gif} alt="loading..." /></span>}
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default SalesLeaders;
