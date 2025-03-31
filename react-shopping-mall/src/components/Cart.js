import React from "react";
import {Link}from "react-router-dom";
import CartItem from "./CartItem";


function Cart({ cartItems, updateQuantity, removeFromCart, clearCart }) {
    // 총 금액 계산
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // 결제하기
    const handleCheckout = () => {
        alert("결제되었습니다!");
    }

    return (
        <div>
            <h2>장바구니</h2>

            {cartItems.length === 0 ? //조건부 랜더링
                (<div>
                    <p>장바구니가 비었습니다.</p>
                    <Link to="/">쇼핑 계속하기</Link>    
                </div>) :
                (<>
                <div>
                    <span>상품</span>
                    <span>수량</span>
                    <span>합</span>
                    <span></span>
                </div>
                <div>{
                    cartItems.map((cartItem) => {
                        return <CartItem 
                            key={item.product.id} 
                            item={item} 
                            updateQuantity={updateQuantity} 
                            removeFromCart={removeFromCart}  />
                    })}</div>
                    
                    

                    <div>
                        <button onClick={clearCart}>장바구니 비우기</button>
                        <div>
                        <p>총 상품 금액 : <span>{formatPrice(calculateTotal())}</span></p>
                        <p>
                            결제 금액 : <span>{formatPrice(calculateTotal())}</span>
                        </p>
                        </div>
                    </div>
                    
                    <div>
                        <Link to="/">쇼핑 계속하기</Link>
                        <button onClick={handleCheckout}>결제하기</button>
                    </div>
                    </>
            )
            }
        </div>
    )
}

export default Cart;