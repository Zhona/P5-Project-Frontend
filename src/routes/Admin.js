
import AdminList from "./AdminList";
import React, { useState, useEffect, useCallback } from "react";
import ProductForm from "./ProductForm";

function Admin({handlePatch }) {
  const [products, setProducts] = useState([]);

  const onDelete = useCallback(
    (deletedItem) => {
      const filteredProducts = products.filter((product) => {
        return product.id !== deletedItem.id;
      });
      setProducts(filteredProducts);
    },
    [products.length]
  );

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products`)
      .then((res) => res.json())
      .then((products) => {
        // console.log(product, "from fetch");
        setProducts(products);
      });
  }, [onDelete]);
  console.log(products, "from products.js");
  return (
    <div>
      <ProductForm products={products} setProduct={setProducts} />
      <AdminList products={products} onDelete={onDelete} handlePatch={handlePatch} setProduct={setProducts}/>
    </div>
  );
}

export default Admin;