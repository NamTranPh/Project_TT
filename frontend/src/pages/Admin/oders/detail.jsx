import { useLocation, useParams, Link } from 'react-router-dom';

const OrderDetail = () => {
    const location = useLocation();
    const order = location.state?.order;

    if (!order) {
        return <div>Không tìm thấy dữ liệu đơn hàng!</div>;
    }

    const subtotal = order.products.reduce((sum, p) => sum + p.price, 0);
    const tax = subtotal * 0.2;
    const total = subtotal + tax;

    return (
        <div className='p-6 space-y-6'>
            <div className='page-header mb-6'>
                <h5 className='text-xl font-bold text-gray-800'>Danh sách đơn hàng</h5>
                <p className='text-gray-500'>Trang chủ / Đơn hàng / Chi tiết đơn hàng</p>
            </div>

            <div className='page-body bg-white rounded shadow p-6 overflow-x-auto'>
                <div className='flex items-center mb-4'>
                    <h2 className='text-2xl font-bold'>Chi tiết đơn hàng: {order.id}</h2>
                    <span className={`ms-3 px-3 py-1 rounded 
                        ${order.status === 'Đã giao'
                            ? 'bg-green-100 text-green-800' :
                            order.status === 'Đang vận chuyển' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                        }`}
                    >
                        {order.status}
                    </span>
                </div>

                <p className='text-gray-500'>{order.dateFrom} - {order.dateTo}</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <div>
                        <strong>Tên khách hàng:</strong> {order.customer.name}
                    </div>
                    <div>
                        <strong>Số điện thoại:</strong> {order.customer.phone}
                    </div>
                    <div>
                        <strong>Địa chỉ:</strong> {order.address}
                    </div>
                    <div>
                        <strong>Ngày tạo:</strong> {order.date}
                    </div>
                    <div>
                        <strong>Tổng tiền:</strong> {order.amount}
                    </div>
                    <div>
                        <strong>Trạng thái:</strong> {order.status}
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Khách hàng</h4>
                        <p>{order.customer.name}</p>
                        <p>{order.customer.email}</p>
                        <p>{order.customer.phone}</p>
                        <button className='mt-2 text-blue-500 underline'>View profile</button>
                    </div>

                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Thông tin đặt hàng</h4>
                        <p>Shipping: {order.shipping.method}</p>
                        <p>Payment: {order.shipping.payment}</p>
                        <p>Status: {order.shipping.status}</p>
                        <button className='mt-2 text-blue-500 underline'>Download info</button>
                    </div>

                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Chuyển đến</h4>
                        <p>{order.address}</p>
                        <button className='mt-2 text-blue-500 underline'>View profile</button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Payment Info</h4>
                        <p>{order.paymentInfo.card}</p>
                        <p>{order.paymentInfo.business}</p>
                    </div>

                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Note</h4>
                        <textarea
                            className='w-full border rounded p-2'
                            rows='4'
                            placeholder='Type some notes'
                            defaultValue={order.note}
                        />
                    </div>
                </div>

                <div className='overflow-auto'>
                    <table className='w-full border-collapse mt-6'>
                        <thead>
                            <tr className='bg-gray-100 text-left'>
                                <th className='p-3'>Tên sản phẩm</th>
                                <th className='p-3'>Mã đặt hàng</th>
                                <th className='p-3'>Số lượng</th>
                                <th className='p-3'>Tổng tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.products.map((item, index) => (
                                <tr key={index} className='border-b'>
                                    <td className='p-3'>{item.name}</td>
                                    <td className='p-3'>{item.orderId}</td>
                                    <td className='p-3'>{item.quantity}</td>
                                    <td className='p-3'>${item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='text-right space-y-1 mt-4'>
                    <p>Tổng tiền hàng: {subtotal.toFixed(2)}</p>
                    <p>Tax (20%): {tax.toFixed(2)}</p>
                    <p>Tổng tiền phí vận chuyển: 0</p>
                    <p>Giảm giá phí vận chuyển: 0</p>
                    <p className='text-xl font-bold'>Tổng cộng: ${total.toFixed(2)}</p>
                </div>
                <div className="flex justify-end gap-1 w-full mt-5">
                    <Link to='/admin/order' className='bg-gray-500 text-white px-4 py-2 rounded'>Quay lại</Link>
                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>Xác nhận</button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
