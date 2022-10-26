import React from 'react'
import {Outlet,Navigate} from "react-router-dom"
import { useSelector } from "react-redux";
function ProtectedRoutes() {
    const routes = useSelector(state=>state.routes.routes)
   
    return routes? <Outlet/> :<Navigate to="login"/>
}

export default ProtectedRoutes