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
import CreateProduct from './pages/Admin/products/create'
import TrashProduct from './pages/Admin/products/trash'
import Order from './pages/Admin/oders/'
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
            <Route path="create" element={<CreateProduct />} />
            <Route path="trashs" element={<TrashProduct />} />
          </Route>

          <Route path="order">
            <Route index element={<Order />} />
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
