import Sidebar from '../../components/Admin/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboardPage = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminDashboardPage
