"use client"
import React, { useEffect, useState } from 'react'
import youtube from "../logos/174883.png";
import click from "../logos/image (13).svg";
import birbank from "../logos/download.png";
import Image from 'next/image';
import iconCheck from "../../../../assests/images/checkj.svg";
import gif from "../../../../assests/images/giphy.gif";
import { IoIosArrowDown, IoIosArrowUp, IoIosInformationCircleOutline } from 'react-icons/io';
import svgStar from "../../../../assests/images/star-svgrepo-com.svg";
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa6';
import { FaBalanceScale } from 'react-icons/fa';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import ProductNav from './ProductNav';
import { CommentType, OfferItems, Product } from '@/types/types';
import { AppDispatch } from '@/redux/store/store';
import { addToCart } from '@/redux/reducers/AddToCartReducer';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { addToBalanced } from '@/redux/reducers/BalancedReducer';
import Skeleton from '@/components/ProductSkeleton/Skeleton';


interface DetailsProps {
    item: OfferItems
    averageRating: any
    comments:CommentType[]
    isLoading:any
}

const ProductHead: React.FC<DetailsProps> = ({ item, averageRating,comments,isLoading }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [commentSection, setCommentSection] = useState(false);
    const [activeButton, setActiveButton] = useState(0)
    const sale = (item?.oldPrice || 0) - (item?.price || 0);
    const [activePeriod, setActivePeriod] = useState<number | null>(12);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [loading, setLoading] = useState<string | null>(null);
    const [cartItems, setCartItems] = useState<string[]>([]);
    const [balanceItems, setBalanceItems] = useState<string[]>([]); 



    const handleAddToCart = (item: OfferItems) => {
        setLoading(String(item.id)); 
        dispatch(addToCart(item));

        setTimeout(() => {
            setLoading(null); 
            setCartItems(prev => [...prev, String(item.id)]); 
        }, 1000);
    };

    useEffect(() => {
        if (item?.price) {
            const monthly = item.price / 12;
            setMonthlyPayment(monthly);
        }
    }, [item]);

    const handleInstallmentClick = (months: number) => {
        setActivePeriod(months);
        if (item?.price) {
            const monthly = item.price / months;
            setMonthlyPayment(monthly);
        }
    };


    const handleAddToBalance = (item: OfferItems) => {
        dispatch(addToBalanced(item));
        setBalanceItems(prev => [...prev, String(item.id)]);

    }

    useEffect(() => {
        console.log(item);
    }, [item]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setCommentSection(true);
            } else {
                setCommentSection(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    useEffect(() => {
        const colorScroll = () => {
            if (window.scrollY < 170) {
                setActiveButton(0);
            } else if (window.scrollY >= 170 && window.scrollY <= 590) {
                setActiveButton(1);
            } else {
                setActiveButton(2);
            }
        };

        window.addEventListener("scroll", colorScroll);
        return () => window.removeEventListener("scroll", colorScroll);
    }, []);


    return (
        <>
            <ProductNav item={item} />
            <div className='head-container'>
                <div className="head-images">
                    <div className="section-1">
                        <div className="img-slide">
                            <button><IoIosArrowUp className='up-icon' /></button>
                            <div className="slide-container">

                                <Image className='youtube' src={youtube} alt='' />
                            </div>
                            <button><IoIosArrowDown className='down-icon' /></button>
                        </div>
                        <div className="img-main">
                            {
                                isLoading? <Skeleton/> :<img src={item?.image} alt='' />
                            }
                            
                        </div>
                        <div className="url">
                            <span><Image src={youtube} alt='' /></span>
                        </div>
                    </div>
                    <div className={commentSection ? "top" : "comment"}>
                        <button className={activeButton === 1 ? "activeSection" : "noneClass"}>Ətraflı</button>
                        <button className={activeButton === 2 ? "activeSection" : "noneClass"}>Rəylər</button>
                    </div>
                </div>
                <div className="head-short-info">
                    <div className="section-title">
                        <div className="title">{item?.name}</div>
                        <div className="deliver-time"><span>2 saata qapında</span></div>
                        <div className="exist-container">
                            <div className="product-star"><span><Image
                                src={svgStar}
                                alt={""}
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    margin: "0 2px",
                                    filter: "grayscale(0%)"
                                }}
                                className="form-icon"
                            /> <div>{averageRating?.toFixed(1)}</div></span><span><FaRegCommentDots /> <div className='cmt'>Rəylər {comments? comments.length:0}</div> </span></div>
                            <div className="exist"><span>Məhsul mövcuddur</span> <div>TM-DG-SBP-1050-SM-2845</div></div>
                        </div>
                    </div>
                    <div className="toCart">
                        <div className='sale'><span>-{sale.toFixed(0)}₼</span></div>
                        <div className="price"><span className='actual-price'>{item?.price}</span> <span className='price-before'>{item?.oldPrice}</span></div>
                        <div className="btn">
                            <button onClick={() => handleAddToCart(item)}
                                className={cartItems.includes(String(item.id)) ? "inCart fshp" : "fshp"}>
                                {cartItems.includes(String(item.id))
                                    ? <Image src={iconCheck} alt="" />
                                    : <FontAwesomeIcon icon={faCartShopping} className='icon icon-shopping ' />}
                                <span>{cartItems.includes(String(item.id)) ? "Səbətdə" : "Səbətə at"}</span>
                                {loading === String(item.id) && <span className="spin"><Image src={gif} alt="loading..." /></span>}
                            </button>
                            <button><Image src={click} alt='' /><span>Bir kliklə al</span></button>
                            <div className='buttonEvent'>
                                <button><FaRegHeart /></button>
                                <button onClick={() => handleAddToBalance(item)}><FaBalanceScale className={balanceItems.includes(String(item.id)) ? "fa-balance icon" : "icon"} /> </button>
                            </div>
                        </div>
                    </div>
                    <div className="creditCalc">
                        <div className="credit-title">Hissəli alış kalkulyatoru</div>
                        <p className='case'>Şərtlər ilk dəfə olaraq endirimli qiymətə tətbiq olunur</p>
                        <div className="credit-month">
                            <div className="month">
                                <div className='column'>
                                    <div className="percent">
                                        <span>0%</span>
                                        <span onClick={() => handleInstallmentClick(6)} className={activePeriod === 6 ? 'activePrd' : ''}>6 ay</span>
                                    </div>
                                    <div className="percent">
                                        <span>0%</span>
                                        <span onClick={() => handleInstallmentClick(9)} className={activePeriod === 9 ? 'activePrd' : ''}>9 ay</span>
                                    </div>
                                    <div className="percent">
                                        <span>0%</span>
                                        <span onClick={() => handleInstallmentClick(12)} className={activePeriod === 12 ? 'activePrd' : ''}>12 ay</span>
                                    </div>
                                    <div className="percent">
                                        <span className='visible'>0%</span>
                                        <span onClick={() => handleInstallmentClick(15)} className={activePeriod === 15 ? 'activePrd' : ''}>15 ay</span>
                                    </div>
                                    <div className="percent">
                                        <span className='visible'>0%</span>
                                        <span onClick={() => handleInstallmentClick(18)} className={activePeriod === 18 ? 'activePrd' : ''}>18 ay</span>
                                    </div>
                                </div>
                            </div>
                            <div className="month-price">
                                <span>Ayliq</span>
                                <span>{monthlyPayment.toFixed(2)} ₼</span>
                            </div>
                        </div>
                        <div className="info">
                            <IoIosInformationCircleOutline className='info-icon' />
                            <p>Sifarişin rəsmiləşdirilməsi zamanı komissiya əlavə oluna bilər</p>
                        </div>
                    </div>
                    <div className="part-section">
                        <div className="part-title">Hissə-hissə alın</div>
                        <div className="credit-card">
                            <span>
                                <Image src={birbank} alt='' />
                                <span>12 ay 315.00 ₼ </span>
                            </span>
                        </div>
                    </div>
                    <div className="otherServices">
                        <div className="other-title">Əlavə xidmətlər</div>
                        <span className='services-button'>
                            <AiOutlinePlusCircle className='circle' />
                            <span>Zəmanət</span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductHead
