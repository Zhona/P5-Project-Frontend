import React, { useState, useEffect, useCallback } from "react";
import ProductList from "./ProductList";
import Admin from "./Admin";
import ProductForm from "./ProductForm";

function Products({ user }) {
  const [products, setProducts] = useState([]);
  // console.log(products, "from products.js");

  const onDelete = useCallback(
    (deletedItem) => {
      const filteredProducts = products.filter((product) => {
        console.log("filtering", product.id, deletedItem.id);
        return product.id !== deletedItem.id;
      });
      setProducts(filteredProducts);
    },
    [products.length]
  );

  const onUpdate = (shopProduct) => {
    const updateProducts = products.map((product) => {
      if (product.id === shopProduct.id) {
        return shopProduct;
      } else {
        return product;
      }
    });
    setProducts(updateProducts);
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products`)
      .then((res) => res.json())
      .then((products) => {
        // console.log(product, "from fetch");
        setProducts(products);
      });
  }, [onDelete]);

  return (
    <div>
      <ProductForm products={products} setProduct={setProducts} user={user} />

      <ProductList
        products={products}
        onDelete={onDelete}
        user={user}
        setProducts={setProducts}
        onUpdate={onUpdate}
      />
    </div>
  );
}

export default Products;
