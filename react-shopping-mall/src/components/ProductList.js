import ProductItem from "./ProductItem";

function ProductList({ products, addToCart, categoryFilter, searchTerm }) {
  // 카테고리 필터 적용
  let filteredProducts = categoryFilter
    ? products.filter((product) => product.category === categoryFilter)
    : products;
  // 검색어 필터

  // console.log(searchTerm)
  if (typeof searchTerm === "string" && searchTerm.trim() !== "") {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredProducts);
  }

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <div>
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div>
          {filteredProducts.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductList;
