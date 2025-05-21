import Sidebar from '../../components/Admin/Sidebar'
import { Outlet } from 'react-router-dom'

const AdminPage = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminPage
