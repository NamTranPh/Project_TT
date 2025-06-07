import ProductForm from '../../../../components/Admin/ProductForm/ProductForm'

const ProductCreate = () => {
  return (
    <div className='p-4'>
      <h1 className='uppercase font-bold text-[22px]'>Thêm sản phẩm</h1>
      <ProductForm initialValues={null}/>
    </div>
  )
}

export default ProductCreate