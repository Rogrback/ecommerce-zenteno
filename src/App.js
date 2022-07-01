import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/scss/bootstrap";

/* The following line can be included in your src/index.js or App.js file */

// import './App.scss';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
// import { Product } from './components/Product';
import { DetailProduct } from './components/DetailProduct';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = { <Home /> } />
        <Route path="product/:id" element={ <DetailProduct/> } />
      </Routes>    
      <Footer/>    
    </Router>
  );
}

