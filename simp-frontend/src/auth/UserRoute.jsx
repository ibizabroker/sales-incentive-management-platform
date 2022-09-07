import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const UserRoute = () => {
    return(
        (JSON.parse(window.localStorage.getItem('user')).role[0].roleName) === 'Salesman' ? <Outlet /> : <Navigate to="/forbidden" />
    );
}

export default UserRoute;