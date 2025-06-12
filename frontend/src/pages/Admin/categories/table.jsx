import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const Table = () => {
    const listCategories = [
        { id: 1, name: 'Điện thoại', destroy: true },
        { id: 2, name: 'Laptop', destroy: false },
        { id: 3, name: 'Máy tính bảng', destroy: false },
        { id: 4, name: 'Phụ kiện điện thoại', destroy: false },
        { id: 5, name: 'Phụ kiện laptop', destroy: false },
        { id: 6, name: 'Tai nghe & loa', destroy: false },
        { id: 7, name: 'Thiết bị đeo thông minh', destroy: true },
        { id: 8, name: 'Đồng hồ thông minh', destroy: false },
        { id: 10, name: 'Mạng & thiết bị lưu trữ', destroy: true },
        { id: 11, name: 'PC - Máy tính để bàn', destroy: true },
        { id: 12, name: 'Màn hình', destroy: false },
        { id: 13, name: 'Gaming Gear', destroy: false },
        { id: 16, name: 'Camera - An ninh', destroy: false },
        { id: 17, name: 'Phụ kiện Apple', destroy: false },
        { id: 18, name: 'Sạc dự phòng', destroy: false },
        { id: 19, name: 'Phụ kiện xe hơi', destroy: true },
    ];

    const columns = [
        {
            name: 'ID',
            selector: (row) => row.id,
            sorttable: true,
        },
        {
            name: 'Tiêu đề',
            selector: (row) => row.name,
        },
        {
            name: 'Không biết',
            selector: (row) => row.destroy ? 'Chấp nhận' : ' Bỏ',
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='px-4 py-2 whitespace-nowrap text-sm'>
                    <button className='border border-blue-500 text-blue-500 px-3 py-1 rounded mr-2 hover:bg-blue-600 hover:text-white'>
                        Sửa
                    </button>
                    <button className='border border-red-500 text-red-500 px-3 py-1 rounded mr-2 hover:bg-red-600 hover:text-white'>
                        Xóa
                    </button>
                </div>
            ),
        },
    ];

    return (
        <DataTable
            columns={columns}
            data={listCategories}
            pagination
            highlightOnHover
            responsive
        />
    );
}

export default Table;