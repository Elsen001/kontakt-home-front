import Image from 'next/image'
import React from 'react'
import logo from "../logos/download.png"
import Link from 'next/link'


const EmptyCart = () => {
  return (
    <div className='cart-container'>
        <div className="cart-title">
            <strong>Səbət</strong>  (0 Məhsul)
        </div>
        <div className="empty-items">
             <Image src={logo} alt='' />
             <h3>Səbətində məhsul yoxdur</h3>
             <p>İstədiyin məhsulu səbətinə əlavə et.</p>
             <Link href={"/"}>Əsas səhifə</Link>
        </div>
    </div>
  )
}

export default EmptyCart
