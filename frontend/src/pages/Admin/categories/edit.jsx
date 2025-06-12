import Form from '../categories/form'
const CategoriesEdit = () => {
  return (
    <div className='p-6'>
      <div className='page-header'>
        <h5 className='text-2xl font-bold text-gray-800 mb-8'>Sửa danh mục</h5>
      </div>

      <div className='page-body bg-white'>
        <Form />
      </div>
    </div>
  )
}

export default CategoriesEdit
