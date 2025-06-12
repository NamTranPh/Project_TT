import React, { useState } from 'react';
import Table from '../oders/table';

const tabs = [
  { label: 'Tất cả', value: 'all', count: 0 },
  { label: 'Đơn mới', value: 'new', count: 4 },
  { label: 'Chờ xác nhận', value: 'pending', count: 3 },
  { label: 'Đã xác nhận', value: 'confirmed', count: 0 },
  { label: 'Đã chuẩn bị hàng', value: 'prepared', count: 2 },
  { label: 'Vận chuyển', value: 'shipping', count: 3 },
  { label: 'Giao thành công', value: 'delivered', count: 8 },
  { label: 'Giao thất bại', value: 'failed', count: 0 },
  { label: 'Hủy đơn', value: 'cancelled', count: 0 },
];

const OderList = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className='p-6'>
      <div className='page-header mb-6'>
        <h5 className='text-xl font-bold text-gray-800'>Danh sách đơn hàng</h5>
        <p className='text-gray-500'>Trang chủ / Đơn hàng</p>
      </div>

      <div className='page-body bg-white rounded shadow p-6 overflow-x-auto'>
        {/* Tabs */}
        <div className="flex overflow-x-auto whitespace-nowap border-b border-gray-300">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`
                  relatetive px-3 py-1.5 text-sm rounded-t
                  ${isActive ? 'bg-white border border-gray-300 border-b-white text-gray-800'
                    : 'text-gray-500 hover:border hover:rounded-t-md hover:border-gray-300 hover:text-[#19559e]'
                  }
                `}>
                {tab.label}
                {tab.count > 0 && (
                  <span className="ml-1 inline-block px-1.5 text-xs text-red-600 border border-red-500 rounded">
                    {tab.count}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Table content */}
        <Table filter={activeTab} />
      </div>
    </div>
  );
};

export default OderList;
