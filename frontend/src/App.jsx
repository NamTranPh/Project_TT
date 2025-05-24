import { createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'
import AdminLayout from './pages/Admin/AdminLayout'
import UserLayout from './pages/Users/UserLayout'
import Dashboard from './pages/Admin/Dashboard/Dashboard'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Đường dẫn cho UserLayout */}
        <Route path="/" element={<UserLayout />} />

        {/* Đường dẫn cho AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}

export default App
