import React from "react";

function CartItem({item, updateQuantity, removeFromCart}) {
    const {product, quantity} = item;
    
    const handleIncreaseQuantity = () => {
        updateQuantity(product.id, quantity + 1);
    }

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            updateQuantity(product.id, quantity - 1);
        }
    }

    const handleRemove = () => {
        removeFromCart(product.id);
    }

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\c))/g, ",") + "원";
    }

    return (
        <div>
            <div>
                <img src={product.imgUrl} alt={product.name} />
            </div>

            <div>
                <h3>{product.name}</h3>
                <p>{formatPrice(product.price)}</p>
            </div>

            <div> {/* 수량 조절 컨테이너 */}
                <button onClick={handleDecreaseQuantity} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
            </div>

            <div>
                <p>{formatPrice(product.price * quantity)}</p>
            </div>

            <button onClick={handleRemove}>
                <span>delete</span>
            </button>
        </div>
    )
}

export default CartItem;