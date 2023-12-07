import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import SaleArticle from './pages/article/SaleArticle';



function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <a>data</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-a active">Home</a>
              <a className="nav-a" >Features</a>
              <a className="nav-a" >Pricing</a>
              <a className="nav-a disabled" >Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      {/* route section */}
      <Router>
        <Routes>
          <Route exac path="/" element={<Home />} />
          <Route exac path="/venta-articulo" element={<SaleArticle />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
