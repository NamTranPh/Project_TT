import { Link } from "react-router-dom";

const Voucher = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Trang Mã Khuyến Mại</h1>
      
      <Link to="/admin/voucher/create_voucher"className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        + Thêm Voucher Mới
      </Link>

    </div>
  );
};

export default Voucher;