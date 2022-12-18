function ProductCard ({product}) {
    console.log(product, "from pc")

   const price = `$${product.price}`
    return (
        <>
         <li className="card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{price}</p>
      {/* {stock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )} */}
      {/* <button>Delete</button> */}
    </li>
        </>
    )
}

export default ProductCard;