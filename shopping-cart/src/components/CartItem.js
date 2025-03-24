const CartItem = ({item, updateQuantity, removeFromCart}) => {
    <div className="cart-item">
        <div className="cart-item-image">
            <span>{item.emoji}</span>
        </div>
        <div className="cart-item-info">
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-price">{item.price.toLocaleString()}원</div>
        </div>
        <div className="cart-item-controls">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="quantity-btn" disabled={item.quantitiy <= 1}> - </button>
            <span className="quantity-display">{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="quantity-btn"> + </button>
            <button onClick={() => removeFromCart(item.id)} className="remove-btn">X</button>
        </div>
    </div>
}

export default CartItem;