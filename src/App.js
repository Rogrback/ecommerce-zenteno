import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Register } from './components/Register';
import { Product } from './pages/Product';

export const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = { <Home /> } />
        <Route path="/productos" element={ <Product/> } />
        <Route path="/registro" element = { <Register /> } />
      </Routes>     
    </Router>
  );
}

