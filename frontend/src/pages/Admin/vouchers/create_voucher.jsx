const CreateVoucher = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tạo Mã Khuyến Mại Mới</h1>

      {/* Form thêm voucher sẽ đặt ở đây */}
      <form>
        <input
          type="text"
          placeholder="Nhập mã khuyến mại"
          className="border p-2 mb-4 block w-full"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Lưu
        </button>
      </form>
    </div>
  );
};

export default CreateVoucher;
