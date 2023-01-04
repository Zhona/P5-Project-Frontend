import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Login from "./routes/Login";
import Cart from "./routes/Cart";
import Profile from "./routes/Profile";
import Thankyou from "./routes/Thankyou";
import Signup from "./routes/Signup";
import SingleProduct from "./routes/SingleProduct";
import Admin from "./routes/Admin";
import Header from "./routes/Header";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

  const jwt_token = localStorage.getItem("jwt");
  console.log(jwt_token);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      headers: {
        Authorization: "Bearer " + jwt_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data.user);
      });
  }, []);


  const [isBag, setIsBag] = useState(false);
  const [inCartProducts, setInCartProducts] = useState([]);

  console.log(inCartProducts);

  const addToCart = (newProduct) => {
    //console.log(newProduct, "app.js")
    const updatedCart = [...inCartProducts, newProduct];
    setInCartProducts(updatedCart);
  };
console.log(user, "teana testing")
  return (
    <div className="App">
      <Header user={user}/>
      <Routes>
        {jwt_token ? (
          <>
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} ></Profile>}
            ></Route>
          </>
        ) : (
          <>
          
          </>
        )}
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
            <Route
              path="/login"
              element={<Navigate to="/login" replace></Navigate>}
            ></Route>

        <Route
          path="/cart"
          element={
            <Cart
              inCartProducts={inCartProducts}
              setInCartProducts={setInCartProducts}
            />
          }
        />
        <Route path="/" element={<Home user={user}/>} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route
          path="/signup"
          element={<Signup user={user} setUser={setUser} setIsSignedIn={setIsSignedIn}/>}
        />
        {/* <Route path="/singleproduct" element={<SingleProduct />} /> */}
        <Route
          path="/products/:productId"
          element={
            <SingleProduct
              setIsBag={setIsBag}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
            user = {user}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
