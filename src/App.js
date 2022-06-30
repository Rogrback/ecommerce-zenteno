import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

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
      <Form/>   
      <Footer/>    
    </Router>
  );
}

