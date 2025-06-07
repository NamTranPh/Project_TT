import ProductItem from './ProductItem'

const ProductsTable = () => {
  return (
    <div>
      <div className="relative overflow-x-auto my-2">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50" >
            <tr>
              <th scope="col" className="px-6 py-3">Hình ảnh</th>
              <th scope="col" className="px-6 py-3">Tên sản phẩm</th>
              <th scope="col" className="px-6 py-3">Danh mục</th>
              <th scope="col" className="px-6 py-3">Giá khuyến mãi</th>
              <th scope="col" className="px-6 py-3">Tồn kho</th>
              <th scope="col" className="px-6 py-3">Hiển thị trên web</th>
              <th scope="col" className="px-6 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody className='m-4'>
            <ProductItem id={1}/>
          </tbody>
        </table>
      </div>
      <div className='flex justify-end pr-10'>
        <ul className="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Previous</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 ">
              <span className="sr-only">Next</span>
              <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductsTable
