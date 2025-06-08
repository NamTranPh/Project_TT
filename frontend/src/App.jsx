import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import AdminLayout from './pages/Admin/AdminLayout';
import UserLayout from './pages/Users/UserLayout'
import Dashboard from './pages/Admin/dashboard/dashboard'
import Product from './pages/Admin/products'
import ProductCreate from './pages/Admin/products/create/ProductCreate'
import ProductEdit from './pages/Admin/products/edit/ProductEdit';
import TrashProduct from './pages/Admin/products/trash'

import OrderList from './pages/Admin/oders/'
import OrderDetail from './pages/Admin/oders/detail'

import Voucher from './pages/Admin/vouchers/'
import CreateVoucher from './pages/Admin/vouchers/create'
import EditVoucher from './pages/Admin/vouchers/edit'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Đường dẫn cho UserLayout */}
        <Route path="/" element={<UserLayout />} />

        {/* Đường dẫn cho AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="products">
            <Route path="" element={<Product />} />
            <Route path="create" element={<ProductCreate />} />
            <Route path="trashs" element={<TrashProduct />} />
            <Route path="edit/:id" element={<ProductEdit />} />
          </Route>

          <Route path="order">
            <Route index element={<OrderList />} />
            <Route path=":id" element={<OrderDetail />} />
          </Route>

          <Route path="voucher">
            <Route index element={<Voucher />} />
            <Route path="create" element={<CreateVoucher />} />
            <Route path="edit" element={<EditVoucher />} />
            <Route path="delete_voucher" element={<CreateVoucher />} />
          </Route>
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}

export default App
