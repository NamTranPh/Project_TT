import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import AdminLayout from './pages/Admin/AdminLayout';
import UserLayout from './pages/Users/UserLayout'
import Dashboard from './pages/Admin/dashboard/dashboard'
import Voucher from './pages/Admin/vouchers/voucher'
import CreateVoucher from './pages/Admin/vouchers/create_voucher'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Đường dẫn cho UserLayout */}
        <Route path="/" element={<UserLayout />} />

        {/* Đường dẫn cho AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="voucher" element={<Voucher/>} />
          <Route path="voucher/create_voucher" element={<CreateVoucher />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}

export default App
