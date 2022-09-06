import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes ,Route,} from 'react-router-dom';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import LogIn from './components/LogIn';
import UserNavbar from './components/UserNavbar';
import SalesComponent from './components/SalesComponent';
import Usersales from './components/Usersales';
import UserSalesGraph from './components/UserSalesGraph';
import AdminNavbar from './components/AdminNavbar';
import SalesmanList from './components/SalesmenList';
import AddSalesman from './components/AddSalesman';
import UploadsalesData from './components/UploadSalesData';
import ForcedCommissionCalculation from './components/ForcedCommissionCalculation';
import CommissionStructureList from './components/CommissionStructureList';
import UpdateCommissionStructure from './components/UpdateCommissionStructure';
import UserCommission from './components/UserCommission';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import AdminRoute from './auth/AdminRoute';
import Forbidden from './components/Forbidden';
import UserRoute from './auth/UserRoute';

export default function App() {
  return (
    <Router>
      <HeaderComponent />
      
      <Routes>
        <Route path='/' exact element={<LogIn/>} />
        <Route path='/login' exact element={<LogIn/>} />
        <Route path='/forbidden' exact element={<Forbidden/>} />
        <Route element={<UserRoute />}>
          <Route path='/user/sales' exact element={<Usersales/>} />
          <Route path='/user/allsales' exact element={<SalesComponent/>} />
          <Route path='/user/showgraph' exact element={<UserSalesGraph/>} />
          <Route path='/user' exact element={<UserNavbar/>} />
          <Route path='/user/mycommission' exact element={<UserCommission/>} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path='/admin' exact element={<AdminNavbar/>} />
          <Route path='/admin/salesmen-list' exact element={<SalesmanList/>} />
          <Route path='/admin/add-salesman' exact element={<AddSalesman/>} />
          <Route path='/admin/upload-salesdata' exact element={<UploadsalesData/>} />
          <Route path='/admin/commissionList' exact element={<CommissionStructureList/>} />
          <Route path='/admin/forced-calculation' exact element={<ForcedCommissionCalculation/>} />
          <Route path='/admin/updateCommission/:commissionId' exact element={<UpdateCommissionStructure/>} />
          <Route path='/admin/products-list' exact element={<ProductsList/>} />
          <Route path='/admin/add-product' exact element={<AddProduct/>} />
        </Route>
      </Routes>

      <FooterComponent />
    </Router>
  );
}
