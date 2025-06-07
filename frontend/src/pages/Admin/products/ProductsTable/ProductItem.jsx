import { Link } from 'react-router-dom'

const ProductItem = ( { id, initialValues } ) => {
  return (
    <tr className="border-b border-gray-200 cursor-pointer">
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        <img
          src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-1_1.png"
          alt="Iphone 16 256GB"
          className="w-[50px] h-[50px] rounded"
        />
      </th>
      <td className="px-6 py-4 ">Iphone 16 256GB</td>
      <td className="px-6 py-4">Điện thoại</td>
      <td className="px-6 py-4">$2999</td>
      <td className="px-6 py-4">20</td>
      <td className="px-6 py-4"><span className="bg-green-600 text-white px-4 py-2 rounded-2xl">Đang hiển thị</span></td>
      <td className="px-6 py-4"><Link to={`edit/${id}`} className="hover:text-blue-500 hover:underline">Xem sản phẩm</Link></td>
    </tr>
  )
}

export default ProductItem