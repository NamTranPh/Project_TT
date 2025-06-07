import React from 'react'

const ProductThumbnail = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 rounded-2xl cursor-pointer mt-3 z-10 shadow">
      <img
        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1_1.png"
        alt="Iphone 16"
        className="w-[50px] h-[50px]"/>
      <span>Iphone 16 256GB</span>
      <span className="text-red-600">Xóa</span>
    </div>
  )
}

export default ProductThumbnail