import MenuItem from './MenuItems/MenuItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faGaugeHigh, faClipboard, faCartShopping, faAddressCard, faTicket } from "../../../icons/icons";

const Sidebar = ({ isOpen }) => {

  const menuItems = [
    { id: 1, title: 'Dashboard', icon: faGaugeHigh, link: '/admin/dashboard' },
    {
      id: 2, title: 'Sản phẩm', icon: faClipboard, children: [
        { title: 'Danh sách sản phẩm', link: '/admin/products/' },
        { title: 'Thêm sản phẩm', link: '/admin/products/create' },
        { title: 'Các sản phẩm đã xóa', link: '/admin/products/trashs' },
        { title: 'Danh mục sản phẩm', link: '/admin/categories/' },

      ]
    },
    { id: 3, title: 'Đơn hàng', icon: faCartShopping, link: '/admin/order' },
    {
      id: 4, title: 'Nhân viên', icon: faAddressCard, children: [
        { title: 'Danh sách nhân viên', link: '/admin/staff/all-staff' },
        { title: 'Thêm nhân viên', link: '/admin/staff/create' },
      ]
    },
    { id: 5, title: 'Mã khuyến mại', icon: faTicket, link: '/admin/voucher' }
  ]
  return (
    <div className={`${isOpen ? 'w-[250px] translate-x-0' : '-translate-x-full absolute left-0'} overflow-hidden fixed h-screen px-2 py-3 z-10 shadow-2xl bg-white transition-all duration-600`}>
      {/* Logo */}
      <div className="px-3 font-semibold text-[30px]">
        <h5 className="text-[#003F62] text-center">
          <FontAwesomeIcon icon={faChartLine} size="0.5x pe-2" />Logo
        </h5>
      </div>
      {/* Menu Item */}
      <nav className='my-[10px]'>
        {
          menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))
        }
      </nav>
    </div>
  )
}

export default Sidebar
