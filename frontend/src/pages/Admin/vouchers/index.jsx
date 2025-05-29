import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "../../../icons/icons";
import Table from '../vouchers/table'

const Voucher = () => {
  return (
    <div className="p-6">
      <div className="page-header flex">
        <h5 className="text-xl font-bold text-gray-800 mb-6">Danh sách Voucher</h5>

        <div className="ms-2">
          <Link to="/admin/voucher/create"
            className="flex items-center text-xs gap-1 px-2 py-2 border border-[#206bc4] text-[#206bc4] rounded bg-transparent hover:bg-[#206bc4] hover:text-white hover:border-0 transition"
          >
            <FontAwesomeIcon icon={faCirclePlus} /> Thêm Voucher Mới
          </Link>
        </div>
      </div>

      <div className="page-body px-5 py-5 bg-white rounded shadow">
        <div className="search-box flex justify-end pb-5">
          <form id="formSearch">
            <div class="flex">
              <input
                id="search"
                type="text"
                placeholder="Nhập từ khóa tìm kiếm"
                className="flex border border-gray-300 rounded px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-blue-500 transition"
              />
              <button type="submit" className="ms-2 px-2 py-1 border border-[#206bc4] text-[#206bc4] rounded bg-transparent hover:bg-[#206bc4] hover:text-white hover:border-0 transition">Tìm kiếm</button>
            </div>
          </form>
        </div>

        <div>
          <Table />
        </div>
      </div>

    </div>
  );
};

export default Voucher;