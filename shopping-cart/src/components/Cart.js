const Cart = ({ cartItems, updateQuantity, removeFromCart, clearCart }) => {
    const total =  cartItems.reduce((sum, item) =>  (sum+item.price*item.quantity), 0)
    
    if (cartItems.length === 0) {
        return (
            <div className="cart">
                <h2 className="cart-title">장바구니</h2>
                <p className="empty-cart-message">장바구니가 비었습니다</p>
            </div>
        )
    }

    else {
        return (
            <div className="cart">
                <div className="cart-header">
                    <div className="cart-title">
                        장바구니
                    </div>
                    <button onClick={clearCart} className="clear-cart-btn">
                        비우기
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.map((item) => <cartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>)}
                </div>

                <div className="cart-footer">
                    <div className="cart-total">
                        <span>총액</span>
                        <span>{total.toLocaleString()}원</span>
                    </div>
                    <button className="checkout-btn">주문하기</button>
                </div>
            </div>
        )
    }
}

export default Cart;