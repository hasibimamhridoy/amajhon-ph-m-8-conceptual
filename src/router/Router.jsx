
import {  createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';
import Profile from '../pages/Dashboard/Profile/Profile';
import EditProfile from '../pages/Dashboard/EditProfile/EditProfile';
import About from '../pages/About/About';
import Favorites from '../pages/Favorites/Favorites';


const router = createBrowserRouter([
    {
      path : "/",
      element : <MainLayout></MainLayout>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
          path: "/",
          element:<Home></Home>
        },
        
        {
          path: "/products",
          element:<Products></Products>,
          loader:()=>fetch(`https://dummyjson.com/products`)
        },
        {
          path: "/products/:id",
          element:<Product></Product>,
          loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
          path: "/about",
          element:<About></About>
        },
        {
          path: "/dashboard",
          element:<DashboardLayout></DashboardLayout>,
          children : [
            {
              path : "/dashboard",
              element:<Dashboard></Dashboard>
            },
            {
              path : "/dashboard/profile",
              element:<Profile></Profile>
            },
            {
              path : "/dashboard/editProfile",
              element:<EditProfile></EditProfile>
            },
          ]
        },
      ]
    }
  ])

export default router;