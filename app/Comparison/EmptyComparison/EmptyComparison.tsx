import Link from 'next/link'
import React from 'react'

const EmptyComparison = () => {
    return (
        <div className='comparison-container'>
            <h4 className="cart-title compar-title">
                Müqayisə
            </h4>
            <div className="empty-comparison">
                <p>Müqayisə siyahısı boşdur. <br /> Kataloqdan istədiyin məhsulları müqayisəyə əlavə et.</p>
                <Link href={"/"}>Əsas səhifə</Link>
            </div>
        </div>
    )
}

export default EmptyComparison
