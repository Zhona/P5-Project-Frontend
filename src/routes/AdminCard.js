import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function AdminCard({ product, products, onDelete }) {
  const handleDelete = () => {
    console.log("this", product.id, "will be deleted");

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE",
    }).then(() => {
      onDelete(product);
    });
  };

  const [update, setUpdate] = useState("");

  const [form, setForm] = useState({
    name: "",
    description: "",
    color: "",
    price: "",
    image: "",
    category_id: "",
  });

  let handlePatch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: update,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  let handleUpdate = (e) => {
    setUpdate(e.target.value);
    // console.log(update);
  };

  const price = `$${product.price}`;

  return (
    <>
      <li>
        <img
          className=".single-product"
          src={product.image}
          alt={product.name}
        />{" "}
        <img className="character-img" />
        <h4>{product.name}</h4>
        <p>{price}</p>
        <button onClick={handleDelete}>Delete</button>
        <form>
          <input
            onChange={handleUpdate}
            type="number"
            name="price"
            value={products.price}
            placeholder="Price"
          />
          <button onClick={handlePatch} type="submit">
            Update
          </button>
        </form>
      </li>
      <div></div>
    </>
  );
}

export default AdminCard;
