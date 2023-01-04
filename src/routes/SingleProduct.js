import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct({ setIsBag, addToCart }) {
  // const [inStock, setInStock] = useState(true)
  let { productId } = useParams();

  console.log(productId, "from single prodicts params ");

  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/products/${productId}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product, "from fetch");
        setCurrentProduct(product);
      });
  }, []);

  const onClick = () => {
    // console.log("get", currentProduct, "details");
  };
  //currentProduct = product information

  // function sendToCart () {

  // }

  //   let handleSubmit = (e) => {
  //     e.preventDefault();
  //     fetch("http://127.0.0.1:3000/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(form),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setProduct([data, ...products]));
  //   };

  const color = `Color ${currentProduct.color}`;
  const price = `$${currentProduct.price}`;

  return (
    <div className="single-product">
      <div className="product-imgs-container">
        <img src={currentProduct.image} alt={currentProduct.name} />
      </div>
      <div className="warpper">
        <div className="sing-product-info">
          <div className="name-and-price">
            <h4>{currentProduct.name}</h4>
            <p>{price}</p>
          </div>

          {/* <p>{currentProduct.description}</p> */}
          <hr></hr>
          <div className="details-container">
            <p>These potions are produced with heavy blessing, magic, and intention. 
            Blessed with the intention of filling your soul with the unconditional love & adventure.

This tea is known to be heart expanding, soul enriching, and spiritually refreshing.
 The experience will leave you in awe and the adventure that you encounter that will fill your heart will be overflowing for a lifetime.</p>
          </div>
          <hr></hr>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(currentProduct)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
