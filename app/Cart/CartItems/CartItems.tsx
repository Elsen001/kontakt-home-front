"use client"
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./style.scss"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineTrash } from "react-icons/hi2";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { addToCart, changeItemCount, deleteItems, emptyItems } from "@/redux/reducers/AddToCartReducer";
import Link from 'next/link';

const CartItems = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.cart);
    const cartTotalPrice = useSelector((state: RootState) => state.cart.cartTotalPrice);
    const cartTotalDiscount = useSelector((state: RootState) => state.cart.cartTotalDiscount);
    const cartTotalSavings = useSelector((state: RootState) => state.cart.cartTotalSavings);

    const formattedPrice = Number(cartTotalPrice).toFixed(2) + " ₼";
    const formattedDiscount = Number(cartTotalDiscount).toFixed(2) + " ₼";
    const formatSavings = Number(cartTotalSavings).toFixed(2) + " ₼";

  

    return (
        <div className='cart-items-container'>
            <div className="cart-table">
                <div className="cart-table-head">
                    <div className="cart-item-title"> <strong>Səbət</strong> ({cart.length} məhsul) </div>
                    <div className="cart-item-select">
                        <button className='select-all' disabled={true}>Hamısını seç</button>
                        <button onClick={()=>dispatch(emptyItems())}><HiOutlineTrash className="trash-icon" /> Seçilənləri sil</button>
                    </div>
                </div>
                <div className="cart-wrapper">
                    {
                        cart.map((item) => (
                            <div key={uuidv4()} className="cart-product">
                                <div className="input">
                                    <input
                                        type="checkbox"
                                        checked={true} 
                                       
                                    />
                                </div>
                                <img src={item.image} alt={item.name} />
                                <div className="product-info">
                                    <Link href={`/item/${item.id}`}>{item.name.slice(0, 40)}</Link><br /><br />
                                    <button className="warranty-button"><IoIosAddCircleOutline /> Zəmanət</button>
                                </div>
                                <div className="prd-content-price">
                                    <div className="quantity-controls">
                                        <button onClick={() => dispatch(changeItemCount(item.id))}><AiOutlineMinusCircle /></button>
                                        <span>{item.qty}</span>
                                        <button onClick={() => dispatch(addToCart(item))}><AiOutlinePlusCircle /></button>
                                    </div>
                                    <div className="pricing">
                                        <span className="new-price">{item.price}₼</span>
                                        <span className="old-price">{item.oldPrice} ₼</span>
                                    </div>
                                </div>
                                <button onClick={() => dispatch(deleteItems(item.id))} className="delete-btn"><LiaTimesSolid /></button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="cart-order">
                <div className='prd-count'><span>Məhsul:</span><span>{cart.length} Məhsul</span></div>
                {
                    cart.map((item) => (
                        <div key={uuidv4()} className='order-product'>
                            <div className="prd-name">{item.name.slice(0, 40)} <span>({item.qty} ədəd)</span></div>
                            <div className='prd-price'>
                                <span className="old-price">{item.oldPrice} ₼</span>
                                <span className="new-price">{item.price} ₼</span>
                            </div>
                        </div>
                    ))
                }

                <div className="order-empty"></div>
                <div className="total-price-container">
                    <div className='price'><span>Umumi məbləğ:</span> <span>{formattedPrice} </span></div>
                    <div className='sales'><span>Endirim:</span> <span>{formattedDiscount} </span></div>
                    <div className='total-price'><span>Yekun məbləğ:</span> <span>{formattedPrice} </span></div>
                </div>
                <div className="order-by">
                    <button>Sifarişi rəsmiləşdir</button>
                    <button>Bir kliklə al</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
