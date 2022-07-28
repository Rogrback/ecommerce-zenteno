import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import { Product } from './pages/Product';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import { Protected } from './hoc/Protected';
import { AuthContext } from './context/AuthContext';
import { Secret } from './components/Secret';
import { Logout } from './components/Logout';
import { DetailProduct } from './components/DetailProduct';


export const App = () => {
  const { isAuth } = useContext(AuthContext)
  return (    
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = { <Home /> } />
          <Route path="/productos" element={ <Product/> } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/product/:id' element={<DetailProduct />} />
          <Route
            path='/secret'
            element={
              <Protected isLoggedIn={isAuth}>
                <Secret />
              </Protected>
          }
          />
        <Route path='/logout' element={<Logout />} />
        </Routes>     
      </Router>
  );
}

