import { useLocation, useParams } from 'react-router-dom';

const OrderDetail = () => {
    const { id } = useParams();
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
                <div className='flex items-center justify-between mb-4'>
                    <h2 className='text-2xl font-bold'>Chi tiết đơn hàng: {order.id}</h2>
                    <span className='bg-yellow-200 text-yellow-800 px-3 py-1 rounded'>
                        {order.status}
                    </span>
                </div>

                <p className='text-gray-500'>{order.dateFrom} - {order.dateTo}</p>

                {/* Bổ sung thông tin cơ bản */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <div>
                        <strong>Tên khách hàng:</strong> {order.customer.name}
                    </div>
                    <div>
                        <strong>Số điện thoại:</strong> {order.phone}
                    </div>
                    <div>
                        <strong>Địa chỉ:</strong> {order.address}
                    </div>
                    <div>
                        <strong>Ngày tạo:</strong> {order.date}
                    </div>
                    <div>
                        <strong>Tổng tiền:</strong> ₹{order.amount}
                    </div>
                    <div>
                        <strong>Trạng thái:</strong> {order.status}
                    </div>
                </div>

                {/* 3 Cards: Customer / Order Info / Deliver To */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Customer</h4>
                        <p>{order.customer.name}</p>
                        <p>{order.customer.email}</p>
                        <p>{order.customer.phone}</p>
                        <button className='mt-2 text-blue-500 underline'>View profile</button>
                    </div>

                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Order Info</h4>
                        <p>Shipping: {order.shipping.method}</p>
                        <p>Payment: {order.shipping.payment}</p>
                        <p>Status: {order.shipping.status}</p>
                        <button className='mt-2 text-blue-500 underline'>Download info</button>
                    </div>

                    <div className='border p-4 rounded shadow'>
                        <h4 className='font-semibold mb-1'>Deliver to</h4>
                        <p>{order.address}</p>
                        <button className='mt-2 text-blue-500 underline'>View profile</button>
                    </div>
                </div>

                {/* Payment Info + Note */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
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

                {/* Product Table */}
                <div className='overflow-auto'>
                    <table className='w-full border-collapse mt-6'>
                        <thead>
                            <tr className='bg-gray-100 text-left'>
                                <th className='p-3'>Product Name</th>
                                <th className='p-3'>Order ID</th>
                                <th className='p-3'>Quantity</th>
                                <th className='p-3'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.products.map((item, index) => (
                                <tr key={index} className='border-b'>
                                    <td className='p-3'>{item.name}</td>
                                    <td className='p-3'>{item.orderId}</td>
                                    <td className='p-3'>{item.quantity}</td>
                                    <td className='p-3'>₹{item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Tổng kết */}
                <div className='text-right space-y-1 mt-4'>
                    <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                    <p>Tax (20%): ₹{tax.toFixed(2)}</p>
                    <p>Shipping Rate: ₹0</p>
                    <p className='text-xl font-bold'>Total: ₹{total.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
