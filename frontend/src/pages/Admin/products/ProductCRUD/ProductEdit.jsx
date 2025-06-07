import ProductForm from '../../../../components/Admin/ProductForm/ProductForm'

const ProductEdit = () => {
  const productData = {
    productName: 'Iphone 16 256GB',
    version: '256GB',
    category: 'Điện thoại',
    price: 2999,
    stock: 10,
    description: 'Mô tả sản phẩm...',
    // Add other fields as needed
  };
  return (
    <div className='p-4'>
      <h1 className='uppercase font-bold text-[22px]'>Sửa sản phẩm</h1>
      <ProductForm initialValues={productData}/>
    </div>
  )
}

export default ProductEdit