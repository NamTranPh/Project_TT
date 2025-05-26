import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuItem = ({ item }) => {
  return (
    <div className="uppercase my-1">
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          `flex items-center w-full p-3 cursor-pointer transition-all rounded-lg outline-none text-start ${isActive
            ? 'bg-[#003F62] text-white'
            : 'text-gray-700 hover:bg-[#003F62] hover:text-white'
          }`
        }
      >
        {item.icon && <span><FontAwesomeIcon icon={item.icon} className="mr-2" /></span>}
        {item.title}
      </NavLink>
    </div>
  );
};

export default MenuItem;