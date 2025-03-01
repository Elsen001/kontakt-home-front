import React from 'react'
import "../style/productDescription.scss"
import { OfferItems, Product } from '@/types/types';

interface ProductDescriptionProps {
  item: OfferItems;
}


const ProductDescription: React.FC<ProductDescriptionProps> = ({ item })=> {


  return (
    <div className='ProductDescription'>
      <h1></h1>
         <div className="pdTitle">Məhsulun təsviri: <span>The Ninja CREAMi Deluxe turns almost anything into ice cream, sorbet, gelato, and much more. Go beyond ice cream with 5 new programs including Italian Ice and Frozen Yogurt. Create fun frozen treats for the whole family with 24 oz. XL Tubs—get 50% more ice cream than the original Ninja CREAMi.</span></div>
         <div>"DUAL PROCESSING: Use the same base to make two separate mix-in flavors—add candy to the top portion and serve first, then add cookies to the bottom and enjoy later for even more customizable treats."</div>
         
    </div>
  )
}

export default ProductDescription
