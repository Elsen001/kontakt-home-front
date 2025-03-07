"use client"
import "./special.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import gif from "../../../../assests/images/giphy.gif";
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useState } from "react";
import { addToCart } from "@/redux/reducers/AddToCartReducer";
import { OfferItems } from "@/types/types";
import { TbTruckDelivery } from "react-icons/tb";
import { selectproductOffer } from "@/redux/reducers/ProductOfferReducer";
import { FaRegHeart } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { addToBalanced } from "@/redux/reducers/BalancedReducer";

interface productOfferProps {
    productOfferItems: OfferItems[]
}

const SpecialOffer: React.FC<productOfferProps> = ({ productOfferItems }) => {

    const dispatch = useDispatch<AppDispatch>();
    const productOffer = useSelector(selectproductOffer);
    const cart = useSelector((state: RootState) => state.cart.cart);
    const [balanceItems, setBalanceItems] = useState<string[]>([]);
    const [loading, setLoading] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<string[]>([]);


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
        <section style={{marginBottom:"30px"}} className="section-sales">
            <div className="special-slider-container">
                <div className="sales-leaders">
                    <h4>Sevindirən təkliflər</h4>

                </div>
                <Swiper className="swiper-special" spaceBetween={10} slidesPerView={5.3}
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
                >
                    {productOfferItems.map((i, index) => {
                        const isInCart = cart.some(cartItem => cartItem.id === i.id);

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
                    })}
                </Swiper>
            </div>
        </section>
    );
};
export default SpecialOffer;