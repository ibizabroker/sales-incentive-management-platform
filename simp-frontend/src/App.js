import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import SalesComponent from './components/SalesComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <div className="container">
        <SalesComponent />
      </div>
      
      <FooterComponent />
    </div>
  );
}

export default App;
