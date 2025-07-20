import React from 'react'
import { Link } from 'react-router-dom'

function Cart({ id, title, category, image }) {
  
  return (
    <div className="w-52 mb-10 flex-shrink-0 mx-auto md:w-1/4 "> {/* fixed width 15rem and prevent shrinking */}
      <div>
        <Link to={`/product/${id}`}>
          <img
            className="w-52 h-52 md:w-full md:h-100 object-cover"
            src={`https://veronalighting.ir${image}`}
            alt="product_image"
          />
        </Link>
        <div className="mt-3 text-right">
          <div className="text-[14px] text-[#4D4D4D]">{category}</div>
          <div
            dir="rtl"
            className="text-[18px] font-bold text-[#212529] break-words whitespace-normal leading-snug"
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
