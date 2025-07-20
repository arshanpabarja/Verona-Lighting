import React from 'react'
import { Link } from 'react-router-dom'

function Cart2({ id, title, category, image }) {
  
  return (
    <div className="w-60 mb-10 flex-shrink-0 p-1 md:w-full"> {/* fixed width 15rem and prevent shrinking */}
      <div>
        <Link to={`/product/${id}`}>
          <img
            className="w-60 h-60 md:w-full md:h-100 object-cover"
            src={`https://veronalighting.ir/django/images/${image}`}
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

export default Cart2
