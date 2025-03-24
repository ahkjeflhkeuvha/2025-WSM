const Product = ({product, addToCart}) => {
    return (
        <div className="product">
            <div className="product-content">
                <div className="product-image">
                    <span className="product-emoji">{product.emoji}</span>
                </div>
                <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price.toLocaleString()}원</p>
                    <p className="product-category">#{product.category}</p>
                </div>
                <button onClick={() => addToCart(product)} className="add-to-cart-btn">담기</button>
            </div>
        </div>
    )
}

export default Product;