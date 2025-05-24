import { Link } from 'react-router-dom';

const MenuItem = ({ item }) => {
  return (
    <div className="my-1">
      <Link
        to={item.link}
        className={`flex items-center w-full p-3 cursor-pointer transition-all rounded-lg outline-none text-start ${
          item.isActive
            ? 'bg-[#003F62] text-white'
            : 'text-gray-700 hover:bg-[#003F62] hover:text-white'
        }`}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.title}
      </Link>
    </div>
  );
};

export default MenuItem;