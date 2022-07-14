import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DetailProduct } from './components/DetailProduct';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Register } from './components/Register';

export const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element = { <Home /> } />
        <Route path="product/:id" element={ <DetailProduct/> } />
        <Route path="/registro" element = { <Register /> } />
      </Routes> 
      <Footer/>    
    </Router>
  );
}

