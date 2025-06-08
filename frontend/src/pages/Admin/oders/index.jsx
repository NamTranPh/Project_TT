import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '../../../icons/icons';
import Table from '../oders/table'

const OderList = () => {
  return (
    <div className='p-6'>
      <div className='page-header mb-6'>
        <h5 className='text-xl font-bold text-gray-800'>Danh sách đơn hàng</h5>
        <p className='text-gray-500'>Trang chủ / Đơn hàng</p>
      </div>

      <div className='page-body bg-white rounded shadow p-6 overflow-x-auto'>
        <Table />
      </div>

    </div>
  )
}

export default OderList;