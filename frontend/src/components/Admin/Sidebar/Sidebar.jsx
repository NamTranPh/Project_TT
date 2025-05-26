import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItems/MenuItem';
import Collapses from './Collapses/Collapses';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faGaugeHigh, faClipboard, faCartShopping, faAddressCard, faTicket } from "../../../icons/icons";

const Sidebar = () => {

  const menuItems = [
    { id: 1, title: 'Dashboard', icon: faGaugeHigh, link: '/admin/dashboard'},
    { id: 2, title: 'Sản phẩm', icon: faClipboard, link: '/admin/all-product'},
    { id: 3, title: 'Đơn hàng', icon: faCartShopping, link: '/admin/order-list'},
    { id: 4, title: 'Nhân viên', icon: faAddressCard, link: '/admin/staff'},
    { id: 5, title: 'Mã khuyến mại', icon: faTicket, link: '/admin/voucher'}
  ]
  return (
    <div className='w-[200px] fixed h-screen px-2 py-3 z-10 shadow-2xl bg-white transition-all duration-300'>
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
      {/* Collapses Categories*/}
      <Collapses />
    </div>
  )
}

export default Sidebar
