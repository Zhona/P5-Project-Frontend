import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import React, { useReducer, useState } from "react";
import { motion } from 'framer-motion';


function ProductCard({ product, onDelete, user, setProducts, onUpdate }) {
  const navigate = useNavigate();
  const [inStock, setInStock] = useState(true);

  const handleDelete = () => {
    // console.log("this", product.id, "will be deleted");

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE",
    }).then(() => {
      onDelete(product);
    });
  };

  const [price, setPrice] = useState(0);

  const [update, setUpdate] = useState()
  
  function handleUpdate() {
    setUpdate(!update)
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: price,
      }),
    }).then((res) => res.json())
    .then((data) => {
      onUpdate(data)
   
    })
  };

  const imgprice = `$${product.price}`;
  return (
    <>
    <div className="events">
      <div className="grid-container2">
      <motion.div initial={{ y: 10, opacity: 0}} whileInView={{ y: 0, opacity: 1, transition:{duration: 1.5} }} className='plant-container'>

        <img
          className=".single-product"
          src={product.image}
          alt={product.name}
          onClick={() => {
            navigate(
              `/products/${product.id}`
            );
          }}
        />
        <h1 className={inStock}></h1>
        <h1>{product.name}</h1>
        <p>{imgprice}</p>
        </motion.div>
        {user?.is_admin === true? <> <button onClick={handleDelete}>Delete</button> 

        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            value={price}
            placeholder="price"
          />
          <button type="submit">Update</button>
        </form>
        </>
        : 
         null}
      </div>
      </div>
    </>
  );
}

export default ProductCard;
