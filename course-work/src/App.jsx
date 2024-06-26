import './App.css'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { Outlet } from "react-router-dom";
import './css/styles.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
