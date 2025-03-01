"use client"
import React from 'react'
import EmptyComparison from './EmptyComparison/EmptyComparison'
import ItemComparison from './ItemComparison/ItemComparison'
import "./style.scss"
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store/store'
const page = () => {
  const balanced = useSelector((state: RootState) => state.balanced.balanced)

  return (
    <>
    {balanced.length>0 ? <ItemComparison/>: <EmptyComparison/>}  
    </>
  )
}

export default page
