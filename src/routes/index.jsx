import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/Home/Home'
import Marketplace from '../pages/Marketplace/Marketplace'
import Rankings from '../pages/rankings/Rankings'
import ConnectWallet from '../pages/connectWallet/ConnectWallet'
import Signup from '../pages/signuppage'
import DynamicPage from '../pages/dynamicTopCreators/DynamicPage'
import LoginComponent from '../components/login/Login'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[{index:true , element:<Home/>}]
    },
    {
        path:'/marketplace',
        element:<Layout/>,
        children:[{index:true, element:<Marketplace/>}]
    },
    {
        path:'/rankings',
        element:<Layout/>,
        children:[{index:true, element:<Rankings/>}]
    },
    {
        path:'/connect-a-wallet',
        element:<Layout/>,
        children:[{index:true, element:<ConnectWallet/>}]
    },
    {
        path:'/marketplace',
        element:<Layout/>,
        children:[{index:true, element:<Marketplace/>}]
    },
    {
        path:'/dynamicpage',
        element:<Layout/>,
        children:[{index:true, element:<DynamicPage/>}]
    },
    {
        path:'/signup',
        element:<Layout/>,
        children:[{index:true, element:<Signup/>}]
    },
    {
        path:'/login',
        element:<Layout/>,
        children:[{index:true, element:<LoginComponent/>}]
    }
]) 


export default routes