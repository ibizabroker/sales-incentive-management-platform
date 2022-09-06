import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AdminRoute = () => {
    return(
        (JSON.parse(window.localStorage.getItem('user')).role[0].roleName) === 'Admin' ? <Outlet /> : <Navigate to="/forbidden" />
    );
}

export default AdminRoute;