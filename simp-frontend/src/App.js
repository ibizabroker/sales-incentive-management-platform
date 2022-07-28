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
import MyCharts from './components/UserChart';
import UploadsalesData from './components/UploadSalesData';
import ChangeCommissionStructure from './components/ChangeCommissionStructure';
import ForcedCommissionCalculation from './components/ForcedCommissionCalculation';

export default function App() {
  return (
    <Router>
      <HeaderComponent />
      
      <Routes>
        <Route path='/' exact element={<LogIn/>} />
        <Route path='/login' exact element={<LogIn/>} />
        <Route path='/user/sales' exact element={<Usersales/>} />
        <Route path='/user/allsales' exact element={<SalesComponent/>} />
        <Route path='/user/showgraph' exact element={<UserSalesGraph/>} />
        <Route path='/user' exact element={<UserNavbar/>} />
        {/* <Route path='/user/check' exact element={<MyCharts/>} /> */}
        <Route path='/admin' exact element={<AdminNavbar/>} />
        <Route path='/admin/salesmen-list' exact element={<SalesmanList/>} />
        <Route path='/admin/add-salesman' exact element={<AddSalesman/>} />
        <Route path='/admin/upload-salesdata' exact element={<UploadsalesData/>} />
        <Route path='/admin/change-commission' exact element={<ChangeCommissionStructure/>} />
        <Route path='/admin/forced-calculation' exact element={<ForcedCommissionCalculation/>} />
      </Routes>

      <FooterComponent />
    </Router>
  );
}
