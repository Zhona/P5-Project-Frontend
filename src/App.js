
import './App.css';
import { Link, Routes, Route} from "react-router-dom";
import Home from './routes/Home'
import Products from './routes/Products'
import Login from './routes/Login'
import Cart from './routes/Cart'



function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/products'>Products</Link></li>
          <li> <Link to='/login'>Login</Link></li>
          <li> <Link to='/cart'>Cart</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
