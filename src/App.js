
import Footer from './shreard/Footer';
import Home from './pages/Home';
import './App.css';
import {Outlet} from "react-router-dom";

function App() {
  return (
   <>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
