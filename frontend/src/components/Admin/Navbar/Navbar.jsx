import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear, faRightFromBracket, faBars } from '../../../icons/icons';

const Navbar = ({ onToggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
            <img src="" alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
            <span className="hidden sm:inline">Admin</span>
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300/80 rounded shadow-lg z-50 transition-all duration-150">
              <Link to="/settings" className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm">
                <FontAwesomeIcon icon={faGear} className="mr-2" /> Settings
              </Link>
              <button className="flex items-center w-full px-4 py-2 hover:bg-gray-100 text-sm">
                <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
