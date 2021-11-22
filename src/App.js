import './App.css';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Route, Link, Navigate, Routes } from 'react-router-dom'
import Success from './pages/Success';
import { useSelector } from 'react-redux';

function App() {

  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route path='/register' element={user ? <Navigate to='/' /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
