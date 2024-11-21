import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout'
import Home from '../pages/Home/Home'
import Marketplace from '../pages/Marketplace/Marketplace'
import Rankings from '../pages/rankings/Rankings'
import ConnectWallet from '../pages/connectWallet/ConnectWallet'

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
    }
]) 


export default routes