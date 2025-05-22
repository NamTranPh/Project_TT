import { createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/Users/HomePage'
import AdminDashboardPage from './pages/Admin/AdminDashboardPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/'>
          <Route index={true} path='' element={<HomePage />} />

          <Route path='/admin' element={<AdminDashboardPage />}>
            {/* Thêm định tuyến của Admin tại đây */}
          </Route>
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}

export default App
