import React from "react";
import AdminCard from "./AdminCard";

function AdminList({ products, onDelete, handlePatch }) {
  // console.log( "from admin card");
  
  let productCard;
  if (products) {
    productCard = products.map((product) => (
      // renderproduct(product)
      <AdminCard
        key={product.id}
        product={product}
        onDelete={onDelete}
        products={products}
        handlePatch={handlePatch}
      />
    ));
  }
  return (
    <>
      <ul className="cards">{productCard}</ul>
    </>
  );
}

export default AdminList;
