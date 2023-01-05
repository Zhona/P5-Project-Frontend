import React, { useState } from "react";

function ProductForm({ products, setProduct, user }) {
  // const [update, setUpdate] = useState("");
  // console.log(products, "from product form");

  const [form, setForm] = useState({
    name: "",
    description: "",
    color: "",
    price: "",
    image: "",
    category_id: "",
  });

  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setProduct([data, ...products]));
  };

  return (
    <div className="events">
      {user?.is_admin ===true? 
      <div className="postForm">
        <p>New Product</p>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={products.name}
            placeholder="Product name"
          /></div>
          <div className="input-field">
          <input
            onChange={handleChange}
            type="text"
            name="image"
            value={products.image}
            placeholder="Image URL"
          /></div>
          <div className="input-field">
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={products.description}
            placeholder="Description"
          /></div>
          <div className="input-field">
          <input
            onChange={handleChange}
            type="text"
            name="color"
            value={products.color}
            placeholder="Color"
          /></div>
          <div className="input-field">
          <input
            onChange={handleChange}
            type="number"
            name="price"
            value={products.price}
            placeholder="Price"
          /></div>
          <div className="input-field">
          <input
            onChange={handleChange}
            type="number"
            name="category_id"
            value={products.category_id}
            placeholder="Category ID"
          /></div>
          {/* <div className="flex-column"> */}
            {/* <select>
              <option value="Color">Color</option>
              <option value="color">Brown</option>
              <option value="color">Black</option>
              <option value="color">Grey</option>
            </select>
            <select>
              <option value={products.category_id} >Catrgory ID</option>
              <option value={products.category_id}>Vinyl Figure</option>
              <option value={products.category_id}>Art Print</option>
            </select> */}
          {/* </div> */}
          <button className="ls-button" type="submit">Add Product</button>
        </form>
      </div>
      : <></>}
    </div>
  );
}

export default ProductForm;
