import { useState, useEffect } from 'react'
import ProductCpecification from './ProductSpecification'
import ProductThumbnail from './ProductThumbnail'

const ProductForm = ({ initialValues }) => {
  // Initialize state with initialValues or default values
  const [form, setForm] = useState({
    productName: initialValues?.productName || '',
    version: initialValues?.version || '',
    category: initialValues?.category || '',
    price: initialValues?.price || '',
    stock: initialValues?.stock || '',
    description: initialValues?.description || ''
  })

  // Update state if initialValues change (for edit mode)
  useEffect(() => {
    if (initialValues) {
      setForm({
        productName: initialValues.productName || '',
        version: initialValues.version || '',
        category: initialValues.category || '',
        price: initialValues.price || '',
        stock: initialValues.stock || '',
        description: initialValues.description || ''
      })
    }
  }, [initialValues])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  console.log('Form data:', form)

  return (
    <form className='bg-white rounded-3xl'>
      <div className="p-6 flex justify-between gap-10">
        <div className="w-[50%]">
          {/* Tên sản phẩm */}
          <div>
            <label htmlFor="productName" className="block mb-2 text-sm font-medium text-gray-900 ">Tên sản phẩm</label>
            <input type="text" id="productName" name="productName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2" placeholder="Iphone 16" value={form.productName} onChange={handleChange} />
          </div>
          <div className="flex justify-between">
            {/* Phiên bản */}
            <div className="w-[45%]">
              <label htmlFor="version" className="block mb-2 text-sm font-medium text-gray-900">Phiên bản</label>
              <input type="text" name="version" id="version" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="64GB" required value={form.version} onChange={handleChange} />
            </div>
            {/* Danh mục sản phẩm */}
            <div className="w-[45%]">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Danh mục sản phẩm</label>
              <select id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" value={form.category} onChange={handleChange}>
                <option value="">Chọn danh mục</option>
                <option value="Điện thoại">Điện thoại</option>
                <option value="Headphone">Tai nghe</option>
                <option value="PC">PC</option>
                <option value="Laptop">Laptop</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            {/* Giá sản phẩm */}
            <div className="w-[45%]">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Giá sản phẩm</label>
              <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required value={form.price} onChange={handleChange} />
            </div>
            {/* Số lượng tồn kho */}
            <div className="w-[45%]">
              <label htmlFor="stock" className="block mb-2 text-sm font-medium text-gray-900">Số lượng tồn kho</label>
              <input type="number" name="stock" id="stock" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="$2999" required value={form.stock} onChange={handleChange} />
            </div>
          </div>
          {/* Mô tả sản phẩm */}
          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Mô tả sản phẩm</label>
            <textarea id="description" name="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="Nhập mô tả ..." value={form.description} onChange={handleChange}></textarea>
          </div>
          {/* Thông số kĩ thuật */}
          <ProductCpecification category={form.category}/>
        </div>
        <div className="w-[50%] flex flex-col items-center gap-5">
          {/* Hình ảnh sản phẩm */}
          <div className="w-[400px] h-[400px] border-1 rounded-2xl">
            <img
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1_1.png"
              alt="Iphone 16 256GB"
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className='w-[70%]'>
            <h2 className='font-bold text-2xl mb-2'>Thư viện sản phẩm</h2>
            {/* Thêm hình ảnh sản phẩm */}
            <div className="w-full text-gray-700 text-center border border-dashed rounded p-3 cursor-pointer">
              <span role="img" >📷</span>
              <p className="mt-2">Drop your image here, or browse</p>
              <p>Jpeg, png are allowed</p>
            </div>
            {/* Thumbnail List */}
            <div className="w-full mt-3">
              <ProductThumbnail />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row gap-5 items-end py-10'>
        {
          initialValues
            ? (
              <div className="flex flex-row gap-5">
                <button type="submit" className='w-[200px] bg-[#0065F8] rounded px-4 py-2 text-white cursor-pointer'>Cập nhật sản phẩm</button>
                <button type="submit" className='w-[200px] bg-red-700 rounded px-4 py-2 text-white cursor-pointer'>Xóa sản phẩm</button>
              </div>
            )
            : <button type="submit" className='w-[200px] bg-[#0065F8] rounded px-4 py-2 text-white cursor-pointer'>Đăng sản phẩm</button>
        }
        <button type="button" className='w-[200px] bg-[#003F62] rounded px-4 py-2 text-white cursor-pointer'>Hủy</button>
      </div>
    </form>
  )
}

export default ProductForm