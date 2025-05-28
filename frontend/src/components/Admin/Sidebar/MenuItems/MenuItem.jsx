import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "../../../../icons/icons";

const MenuItem = ({ item }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    if (hasChildren) {
      const isChildActive = item.children.some(child => location.pathname === child.link);
      if (isChildActive) setOpen(true);
    }
  }, [location.pathname]);

  const renderChildren = () => (
    <div className="ml-4 space-y-1">
      {item.children.map((child, index) => (
        <NavLink
          key={index}
          to={child.link}
          className={({ isActive }) =>
            `block px-3 py-2 text-sm rounded-md transition ${isActive 
              ? 'bg-[#003F62] text-white font-semibold' 
              : 'text-gray-700 hover:bg-[#003F62] hover:text-white'
            }`
          }
        >
          {child.title}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="mb-1 px-2" >
      {/* MENU CHA */}
      <div
        className={`flex items-center justify-between rounded-md transition cursor-pointer ${
          hasChildren ? 'hover:bg-[#003F62] hover:text-white text-gray-700' : ''
        }`}
        onClick={() => hasChildren ? setOpen(!open) : null}
      >
        {/* Nếu không có con thì là NavLink luôn */}
        {hasChildren ? (
          <div className="flex items-center gap-2 w-full font-semibold px-3 py-2 uppercase">
            {item.icon && <FontAwesomeIcon icon={item.icon} />}
            {item.title}
          </div>
        ) : (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-2 w-full font-semibold px-3 py-2 rounded-md uppercase ${
                isActive
                  ? 'bg-[#003F62] text-white px-3 py-2'
                  : 'text-gray-700 hover:text-white hover:bg-[#003F62]'
              }`
            }
          >
            {item.icon && <FontAwesomeIcon icon={item.icon} />}
            {item.title}
          </NavLink>
        )}

        {hasChildren && (
          <button onClick={() => setOpen(!open)} className="focus:outline-none px-3">
            <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown}/>
          </button>
        )}
      </div>

      {hasChildren && open && renderChildren()}
    </div>
  );
};

export default MenuItem;