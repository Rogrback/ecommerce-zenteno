import 'bootstrap/dist/css/bootstrap.css';
// import './custom.scss';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
<<<<<<< HEAD

=======
// import { Product } from './components/Product';
>>>>>>> 7bf0a78108857a74d8f7174005a02ad0cf9423a0
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

