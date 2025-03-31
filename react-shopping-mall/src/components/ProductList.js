import ProductItem from "./ProductItem";

function ProductList({products, addToCart, categoryFilter, searchTerm}) {
    // 카테고리 필터 적용
    let filteredProducts = categoryFilter ? products.filter(product => product.category === categoryFilter) : products;

    // 검색어 필터
    if(searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLoweCase()) || 
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    return (
        <div>
        {filteredProducts.length === 0 ? 
            (<div>
                <p>검색 결과가 없습니다.</p>
            </div>) :
            (<div>
                {filteredProducts.map((product) => {
                    <ProductItem 
                        key={product.id} // 랜더링 시 최적화에 도움
                        product={product}
                        addToCart={addToCart}
                    />
                })}
            </div>)
        }</div>
    )
}

export default ProductList;