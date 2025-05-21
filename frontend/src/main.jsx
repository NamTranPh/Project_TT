import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Admin from './pages/Admin/AdminPage'
import HomePage from './pages/Users/HomePage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App /> }>
      <Route index={true} path='' element={<HomePage />}/>
      <Route path='admin' element={<Admin />}>

      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
