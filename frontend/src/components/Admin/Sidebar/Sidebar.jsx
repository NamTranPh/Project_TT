import MenuItem from './MenuItems/MenuItem'
import Collapses from './Collapses/Collapses'
const Sidebar = () => {

  const menuItems = [
    {
      id: 1, title: 'DASHBOARD', icon: '', link: '/admin/dashboard', isActive: true
    },
    {
      id: 2, title: 'ALL PRODUCT', icon: '', link: '/admin/all-product', isActive: false
    },
    {
      id: 3, title: 'ORDER LIST', icon: '', link: '/admin/order-list', isActive: false
    }
  ]
  return (
    <div className='w-[200px] h-screen px-2 py-3 z-10 shadow-2xl'>
      {/* Logo */}
      <div className="px-3 font-semibold text-[30px]">
        <h5 className="text-[#003F62]">
          LOGO
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
