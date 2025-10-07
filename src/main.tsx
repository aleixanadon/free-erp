import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './pages/Home/Home.tsx'
import SignUp from './pages/SignUp/SignUp.tsx'
import Login from './pages/Login/Login.tsx'
import Users from './pages/Users/Users.tsx'
import Launchpad from './pages/Launchpad/Launchpad.tsx'

const router = createBrowserRouter([
  {
    element: <App />, // Antes Layout, ahora App
    children: [
      // main routes
      { path: '/', element: <Home /> },
      { path: '/pricing', element: <h1>Pricing page</h1> },
      { path: '/about', element: <h1>About Page</h1> },
      { path: '/signup', element: <SignUp /> },
      { path: '/login', element: <Login /> },
      // this routes should be protected
      { path: '/launchpad', element: <Launchpad /> },
      { path: '/users', element: <Users /> },
      { path: '/customers', element: <></> },
      { path: '/suppliers', element: <></> },
      { path: '/products', element: <></> },
      { path: '/stock', element: <></> },
      { path: '/kardex', element: <></> },
      { path: '/invoices', element: <></> },
      { path: '/orders', element: <></> },
      { path: '/accounting', element: <></> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
