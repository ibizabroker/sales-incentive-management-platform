import logo from './logo.svg';
import './App.css';

<<<<<<< Updated upstream
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
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
        <Route path='/admin' exact element={<AdminNavbar/>} />
        <Route path='/admin/salesmen-list' exact element={<SalesmanList/>} />
        <Route path='/admin/add-salesman' exact element={<AddSalesman/>} />
      </Routes>

      <FooterComponent />
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
