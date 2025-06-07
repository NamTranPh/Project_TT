import Form from '../vouchers/form'
const CreateVoucher = () => {
  return (
    <div className="p-6">
      <div className="page-header">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Thêm Voucher</h1>
      </div>

      <div className="page-body px-6 py-4 bg-white rounded shadow">
        <form className="space-y-4 ">
          <Form />
        </form>
      </div>
    </div>
  )
}

export default CreateVoucher
