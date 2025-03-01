"use client"
import gif from "../../../../assests/images/giphy.gif";
import iconCheck from "../../../../assests/images/checkj.svg";
import React, { useEffect, useState } from 'react'
import "../style/product-nav.scss";
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa6';
import { FaBalanceScale } from 'react-icons/fa';
import { OfferItems, Product } from '@/types/types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store/store';
import { addToCart } from '@/redux/reducers/AddToCartReducer';
import Image from 'next/image';
import { addToBalanced } from "@/redux/reducers/BalancedReducer";

interface DetailsProps {
    item: OfferItems
}

const ProductNav: React.FC<DetailsProps> = ({ item }) => {
    const dispatch = useDispatch<AppDispatch>();
    const [cartItems, setCartItems] = useState<string[]>([]);
    const [balanceItems, setBalanceItems] = useState<string[]>([]);
    const [prdNav, setPrdNav] = useState(false);
    const [loading, setLoading] = useState<string | null>(null);



    const handleAddToCart = (item: OfferItems) => {
        setLoading(String(item.id));
        dispatch(addToCart(item));

        setTimeout(() => {
            setLoading(null);
            setCartItems(prev => [...prev, String(item.id)]);
        }, 1000);
    };

    const handleAddToBalance = (item: OfferItems) => {
        dispatch(addToBalanced(item));
        setBalanceItems(prev => [...prev, String(item.id)]);

    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setPrdNav(true);
            } else {
                setPrdNav(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={prdNav ? 'product-nav' : "hidden"}>
            <div className="name-product">
                <div className='title'>{item?.name}</div>
                <div className="exist">Mehsul movcuddur</div>
            </div>
            <div className="nav-details-product">
                <div className="price">
                    <span>{item?.price} ₼</span>
                    <span>{item?.oldPrice} ₼</span>
                </div>
                <div className="cart">
                    <button onClick={() => handleAddToCart(item)} className={cartItems.includes(String(item.id)) ? "inCart fshp" : "fshp"}>
                        {cartItems.includes(String(item.id))
                            ? <Image src={iconCheck} alt="" />
                            : <FiShoppingCart />}
                        {loading === String(item.id) && <span className="spin"><Image src={gif} alt="loading..." /></span>}

                    </button>
                    <button>Bir klikle al</button>
                </div>
                <div className="like-balanced">
                    <button><FaRegHeart /></button>
                    <button onClick={() => handleAddToBalance(item)}><FaBalanceScale className={balanceItems.includes(String(item.id)) ? "fa-balance icon" : "icon"} /></button>
                </div>
            </div>
        </div>
    )
}

export default ProductNav
