
import React, {useEffect, useState} from 'react'
import './App.css';
import { Routes, Link, Route, Navigate } from "react-router-dom";
import Home from './routes/Home'
import Products from './routes/Products'
import Login from './routes/Login'
import Cart from './routes/Cart'
import Profile from './routes/Profile'



function App() {
  const jwt_token = localStorage.getItem("jwt");
  console.log(jwt_token);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/bio", {
      headers: {
        Authorization: "Bearer " + jwt_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
const [products, setProduct] = useState([])
  useEffect(()=>{
    fetch("http://127.0.0.1:3000/products")
    .then(res=> res.json())
    .then(product => {
      console.log(product, "from fetch")
      setProduct(product)
    })
  },[])
  return (
    // <div className="App">
    //   <nav>
    //     <ul>
    //       <li> <Link to='/'>Home</Link></li>
    //       <li> <Link to='/products'>Products</Link></li>
    //       <li> <Link to='/login'>Login</Link></li>
    //       <li> <Link to='/cart'>Cart</Link></li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/products" element={<Products products = {products}/>} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Routes>
    // </div>
    <div className="App">
      <nav>
      <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/products'>Products</Link></li>
      <li> <Link to='/login'>Login</Link></li>
      <li> <Link to='/cart'>Cart</Link></li>
      </nav>
      <Routes>
        {/* {true ? ( */}
          <Route
            path="/profile"
            element={<Profile user={user}></Profile>}
          ></Route>  
        {/* ) : ( */}
          {/* <Route path="/redirect" element={<Navigate to="/login" replace />} />
        )} */}
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/login"
          element={<Navigate to="/login" replace></Navigate>}
        ></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products products={products}/>} />
      </Routes>
    </div>
  );
}

export default App;
