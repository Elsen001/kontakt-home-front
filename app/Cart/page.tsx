"use client"
import React from 'react'
import EmptyCart from './EmptyCart/EmptyCart'
import RouteWay from '@/components/routeWay/RouteWay'
import CartItems from './CartItems/CartItems';
import "./style.scss";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store/store';



const page = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  

  return (
    <>
        <RouteWay/>
        {cart.length==0 ? <EmptyCart/>: <CartItems/> }
        
    </>
  )
}

export default page
