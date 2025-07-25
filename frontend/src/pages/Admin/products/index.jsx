import { Link } from 'react-router-dom'
import ProductsTable from './table/ProductsTable'
const Product = () => {
  return (
    <div className="p-4">
      <div className='flex justify-between font-medium'>
        <h1 className='text-[20px]'>Trang sản phẩm</h1>
        <Link to="/admin/products/create" className='flex justify-between items-center bg-[#003F62] text-white px-4 py-2 rounded'>
          <svg viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] mr-3'>
            <path d="M256 512C114.625 512 0 397.391 0 256 0 114.609 114.625 0 256 0c141.391 0 256 114.609 256 256 0 141.391-114.609 256-256 256zm0-448C149.969 64 64 149.969 64 256s85.969 192 192 192c106.047 0 192-85.969 192-192S362.047 64 256 64zm32 320h-64v-96h-96v-64h96v-96h64v96h96v64h-96v96z" fill="#ffffff" className="fill-000000"></path>
          </svg>
          <span>Thêm sản phẩm</span>
        </Link>
      </div>
      <ProductsTable />
    </div>
  )
}

export default Product