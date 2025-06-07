import React from 'react';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '../../../icons/icons';

const Dashboard = () => {
  // Dữ liệu mẫu cho dashboard
  const stats = [
    { title: "Tổng số người dùng", value: "2,456", change: "+12%", trend: "up" },
    { title: "Tổng doanh thu", value: "$4,234", change: "+8%", trend: "up" },
    { title: "Tổng đơn hàng", value: "230", change: "-2%", trend: "down" },
    { title: "Số lượng đơn hoàn", value: "15", change: "+5%", trend: "up" },
  ];

  const revenueData = [
    { day: 'Thứ Hai', revenue: 400 },
    { day: 'Thứ Ba', revenue: 300 },
    { day: 'Thứ Tư', revenue: 500 },
    { day: 'Thứ Năm', revenue: 200 },
    { day: 'Thứ Sáu', revenue: 700 },
    { day: 'Thứ Bảy', revenue: 600 },
    { day: 'Chủ Nhật', revenue: 350 },
  ];

  const recentOrders = [
    {
      productName: "Điện thoại iPhone 13",
      id: "#1234",
      date: "2025-05-20",
      customer: {
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "John Doe"
      },
      amount: "$1200",
      status: "Đang vận chuyển"
    },
    {
      productName: "Điện thoại Samsung Galaxy S21",
      id: "#1235",
      date: "2025-05-21",
      customer: {
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Jane Smith"
      },
      amount: "$850",
      status: "Đang xử lý"
    },
    {
      productName: "Điện thoại Xiaomi Mi 11",
      id: "#1236",
      date: "2025-05-22",
      customer: {
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Robert Johnson"
      },
      amount: "$600",
      status: "Đã giao"
    },
    {
      productName: "Điện thoại Oppo Reno 8",
      id: "#1237",
      date: "2025-05-23",
      customer: {
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "Emily Davis"
      },
      amount: "$540",
      status: "Đang xử lý"
    },
  ];

  const userGrowthData = [
    { day: 'Thứ Hai', users: 200 },
    { day: 'Thứ Ba', users: 400 },
    { day: 'Thứ Tư', users: 300 },
    { day: 'Thứ Năm', users: 500 },
    { day: 'Thứ Sáu', users: 700 },
    { day: 'Thứ Bảy', users: 600 },
    { day: 'Chủ Nhật', users: 800 },
  ];

  return (
    <div className="p-6">
      <h5 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h5>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex gap-x-4 items-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5">
            {/* Icon */}
            <div className="bg-gray-200 text-[#003F62] rounded-full p-3">
              <FontAwesomeIcon icon={faBagShopping} className='text-3xl' />
            </div>

            {/* Infomation */}
            <div>
              <h3 className="text-gray-500 text-sm font-bold">{stat.title}</h3>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              <div className={`flex items-center mt-2 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend === 'up' ? (
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                <span className="text-sm">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Doanh thu tuần</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart - User Growth */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Doanh Thu Bán Hàng</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart - BestSellers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Chart */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Doanh thu</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Best */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Top 5 Sản Phẩm bán chạy nhất</h2>
            <button className="text-gray-500 hover:text-gray-700 text-xl cursor-pointer">⋮</button>
          </div>

          <hr className="mb-3" />

          <div className="space-y-4">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-300 rounded-md"></div>

                <div className="flex-1">
                  <div className="font-medium text-sm">Lorem Ipsum</div>
                  <div className="text-gray-400 text-xs">₹126.500</div>
                </div>

                <div className="text-right">
                  <div className="font-bold text-sm">₹126.50</div>
                  <div className="text-gray-400 text-xs">999 sales</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button className="bg-[#003049] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#002437] transition">
              REPORT
            </button>
          </div>
        </div>

      </div>

      {/* Recent Ox`rders */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Đơn hàng gần đây</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Sản Phẩm</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mã đơn hàng</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đặt</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Khách hàng</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng giá</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.productName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <img
                        className="h-8 w-8 rounded-full mr-3"
                        src={order.customer.avatar}
                        alt={order.customer.name}
                      />
                      <span>{order.customer.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${order.status === 'Đã giao' ? 'bg-green-100 text-green-800' :
                        order.status === 'Đang vận chuyển' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                      }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard
