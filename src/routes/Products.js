import ProductList from './ProductList'

function Products ({products}) {
    console.log(products, "from products.js")
    return (
        <div>
            <h1>omg it works </h1>
            <ProductList products={products}/>
        </div>
    )
}

export default Products