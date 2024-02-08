import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/Error/index.jsx'
import MainLayout from './layout/MainLayout/index.jsx'
import Home from './pages/Home/index.jsx'
import PostDetail from './pages/PostDetail/index.jsx'
import Register from './pages/Register/index.jsx'
import Login from './pages/Login/index.jsx'
import Authors from './pages/Authors/index.jsx'
import UserProfile from './pages/UserProfile/index.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    errorElement:<ErrorPage/>,
    element:<MainLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:"/detail/:id",element:<PostDetail/>},
      {path:"/register",element:<Register/>},
      {path:"/login",element:<Login/>},
      {path:"/authors",element:<Authors/>},
      {path:"/userProfile",element:<UserProfile/>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
