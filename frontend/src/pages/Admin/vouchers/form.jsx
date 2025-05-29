const Form = () => {
  return (
    <div>
      {/* Mã voucher */}
      < div className="mb-3" >
        <label htmlFor="voucher_code" className="block text-sm font-medium text-gray-700 mb-1">
          Mã voucher
        </label>
        <input
          id="voucher_code"
          type="text"
          placeholder="Nhập mã voucher"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div >

      {/* Giảm giá */}
      < div className="mb-3" >
        <label htmlFor="voucher_discount" className="block text-sm font-medium text-gray-700 mb-1">
          Giảm giá
        </label>
        <input
          id="voucher_discount"
          type="number"
          min="0"
          max="100"
          placeholder="Ví dụ: 20"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div >

      {/* Ngày bắt đầu */}
      < div className="mb-3" >
        <label htmlFor="start_time" className="block text-sm font-medium text-gray-700 mb-1">
          Thời gian bắt đầu
        </label>
        <input
          id="start_time"
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div >

      {/* Ngày kết thúc */}
      < div className="mb-3" >
        <label htmlFor="end_time" className="block text-sm font-medium text-gray-700 mb-1">
          Thời gian kết thúc
        </label>
        <input
          id="end_time"
          type="date"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div >

      {/* Nút submit */}
      < div className="pt-2 flex justify-end" >
        <button
          type="submit"
          className="px-4 bg-[#0065F8] hover:bg-[#0052cc] text-white py-2 rounded font-semibold transition"
        >
          Đăng
        </button>
      </div >
    </div>
  );
};

export default Form;
