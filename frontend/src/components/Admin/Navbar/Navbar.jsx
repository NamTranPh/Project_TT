import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faBell, faGear, faRightFromBracket, faBars } from '../../../icons/icons'
import { useNavigate } from 'react-router-dom'; //

const Navbar = ({ onToggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const navigate = useNavigate();

  const handleLogout = () => {
    // Xóa token / trạng thái đăng nhập nếu có
    localStorage.removeItem('authToken'); // nếu bạn dùng token
    // Chuyển hướng về trang đăng nhập
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center bg-white px-4 py-2 shadow-md">
      {/* Sidebar toggle */}
      <button className="text-gray-700 text-xl cursor-pointer" onClick={onToggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Right menu */}
      <div className="flex items-center gap-4 relative">
        {/* Notification */}
        <button className="flex items-center gap-2 text-gray-700">
          <FontAwesomeIcon icon={faBell} className=" text-lg cursor-pointer" />
        </button>

        {/* User avatar */}
        <div className="relative">
          <button
            className="flex items-center gap-2 text-gray-700 cursor-pointer"
            onClick={handleToggleDropdown}
          >
            <img src="data:image/jpegbase64,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" alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
            <span className="hidden sm:inline">Admin</span>
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300/80 rounded shadow-lg z-50 transition-all duration-150">
              <Link to='/admin/profiles' className='flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm'>
                <FontAwesomeIcon icon={faUser} className='mr-2' /> Profile
              </Link>
              <Link to="/settings" className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm">
                <FontAwesomeIcon icon={faGear} className="mr-2" /> Settings
              </Link>
              {/* <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm">
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" /> Logout
              </button> */}

              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
