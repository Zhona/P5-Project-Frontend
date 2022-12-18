import ProductCard from './ProductCard'

function ProductList ({products}) {

    console.log(products, "from ProductList")
    // products.map((product) => (
    //     <ProductCard key={product.id} product={product}/>
    // ))

    let productCard 
    if (products ){
        productCard = products.map((product)=> (
        <ProductCard key={product.id} product={product}/>
    ))}
    return (
        <>
            <ul className="cards">{productCard}</ul>
        </>
    )
}

export default ProductList;