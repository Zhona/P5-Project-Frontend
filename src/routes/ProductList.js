import ProductCard from './ProductCard'

function ProductList ({products, onDelete, handlePatch, user, setProducts, onUpdate}) {

    // console.log(products, "from ProductList")

    function renderproduct (product) {
        return(
            <ProductCard key={product.id} product={product} onDelete={onDelete} products={products} handlePatch={handlePatch} user={user} setProducts={setProducts} onUpdate={onUpdate}/>
        )
    }
    let productCard 
    if (products ){
    
        productCard = products.map((product)=> (
            renderproduct(product)
    ))}


    
    return (
        <>
            <div className="cards">{productCard}</div>
        </>
    )
}

export default ProductList;