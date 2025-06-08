import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DataTable from 'react-data-table-component';
import { faEdit, faTrash } from '../../../icons/icons';

const Table = () => {
    const listOrders = [
        {
            id: '#1234',
            customer: {
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                name: 'John Doe',
                phone: '0968917724',
                email: 'JohnDoe@gmail.com',
            },
            date: '24/04/2024 19:44',
            amount: '$1200',
            status: 'Đang vận chuyển',
            shipping: {
                method: 'Nest express',
                payment: 'Paypal',
                status: 'Đang vận chuyển',
            },
            address: 'Dharam Colony, Palam Vihar, Gurgaon, Haryana',
            paymentInfo: {
                card: 'Master Card **** 6557',
                business: 'Shristi Singh',
            },
            note: '',
            products: [
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 980.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 800.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 880.40,
                },
            ],
        },
        {
            id: '#1234',
            customer: {
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                name: 'Evan',
                phone: '0968917724',
                email: 'Evan@gmail.com',
            },
            date: '24/04/2024 19:44',
            amount: '$1200',
            status: 'Đang vận chuyển',
            shipping: {
                method: 'Nest express',
                payment: 'Paypal',
                status: 'Đang vận chuyển',
            },
            address: 'Dharam Colony, Palam Vihar, Gurgaon, Haryana',
            paymentInfo: {
                card: 'Master Card **** 6557',
                business: 'Shristi Singh',
            },
            note: '',
            products: [
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 980.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 800.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 880.40,
                },
            ],
        },
           {
            id: '#1233',
            customer: {
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                name: 'John Doe',
                phone: '0968917724',
                email: 'JohnDoe@gmail.com',
            },
            date: '24/04/2024 19:44',
            amount: '$1200',
            status: 'Đã giao',
            shipping: {
                method: 'Nest express',
                payment: 'Paypal',
                status: 'Đã giao',
            },
            address: 'Dharam Colony, Palam Vihar, Gurgaon, Haryana',
            paymentInfo: {
                card: 'Master Card **** 6557',
                business: 'Shristi Singh',
            },
            note: '',
            products: [
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 980.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 800.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 880.40,
                },
            ],
        },
               {
            id: '#1233',
            customer: {
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
                name: 'John Doe',
                phone: '0968917724',
                email: 'JohnDoe@gmail.com',
            },
            date: '24/04/2024 19:44',
            amount: '$1200',
            status: 'Đang xử lý',
            shipping: {
                method: 'Nest express',
                payment: 'Paypal',
                status: 'Đang xử lý',
            },
            address: 'Dharam Colony, Palam Vihar, Gurgaon, Haryana',
            paymentInfo: {
                card: 'Master Card **** 6557',
                business: 'Shristi Singh',
            },
            note: '',
            products: [
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 980.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 800.40,
                },
                {
                    name: 'Lorem Ipsum',
                    orderId: '#5241',
                    quantity: 2,
                    price: 880.40,
                },
            ],
        },
    ];

    const columns = [
        {
            name: 'Mã ĐH',
            selector: (row) => row.id,
            sorttable: true,
            maxWidth: '60px',
            cell: row => <span className='font-medium text-blue-600'>{row.id}</span>
        },
        {
            name: 'Tên KH',
            selector: (row) => row.customer.name,
            cell: row => (
                <div className='flex items-center gap-2'>
                    <img src={row.customer.avatar} alt={row.customer.name} className='h-8 w-8 rounded-full' />
                    <span>{row.customer.name}</span>
                </div>
            )
        },
        {
            name: 'Số điện thoại',
            selector: (row) => row.customer.phone,
        },
        {
            name: 'Địa chỉ',
            selector: (row) => row.address,
        },
        {
            name: 'Ngày tạo',
            selector: (row) => row.date,
            center: true,
            sortable: true,
        },
        {
            name: 'Tổng tiền',
            selector: (row) => row.amount,
            center: true,
            sortable: true,
        },
        {
            name: 'Trạng thái',
            selector: (row) => row.status,
            center: true,
            cell: row => {
                const statusClass =
                    row.status === 'Đã giao'
                        ? 'bg-green-100 text-green-800'
                        : row.status === 'Đang vận chuyển'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800';
                return (
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}`}>
                        {row.status}
                    </span>
                );
            }
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className='px-4 py-2 whitespace-nowrap text-sm'>
                    <Link
                        to={`/admin/order/${row.id.replace('#', '')}`}
                        state={{ order: row }}
                        className='border border-indigo-500 text-indigo-500 px-3 py-1 rounded mr-2 hover:bg-indigo-600 hover:text-white'
                    >
                        Xem chi tiết
                    </Link>
                    <button className='border border-blue-500 text-blue-500 px-3 py-1 rounded mr-2 hover:bg-blue-600 hover:text-white'>
                        Cập nhật đơn
                    </button>
                    <button className='border border-blue-500 text-blue-500 px-3 py-1 rounded mr-2 hover:bg-blue-600 hover:text-white'>
                        Chuyển kho
                    </button>
                    <button className='border border-green-500 text-green-500 px-3 py-1 rounded mr-2 hover:bg-green-600 hover:text-white'>
                        Xác nhận
                    </button>
                </div>
            ),
        },
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#f9fafb',
                textTransform: 'uppercase',
                fontWeight: 500,
                fontSize: '12px',
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                color: '#6b7280',
                letterSpacing: '0.05em',
            },
        },
        headRow: {
            style: {
                minHeight: '56px',
                borderBottomWidth: '1px',
                borderBottomColor: '#e5e7eb',
            },
        },
        rows: {
            style: {
                minHeight: '56px',
                borderBottomWidth: '1px',
                borderBottomColor: '#e5e7eb',
            },
        },
    };

    return (
        <DataTable
            columns={columns}
            data={listOrders}
            customStyles={customStyles}
            pagination
            highlightOnHover
            responsive
        />
    );
};

export default Table;
