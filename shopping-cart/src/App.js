import React, { useState, useEffect } from "react";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import SearchAndFilter from "./components/SearchAndFilter";

// 메인 앱 컴포넌트
function App() {
  // 상품 데이터
  const productList = [
    {
      id: 1,
      name: "맥북 프로",
      price: 2500000,
      emoji: "💻",
      category: "전자기기",
    },
    {
      id: 2,
      name: "아이폰",
      price: 1200000,
      emoji: "📱",
      category: "전자기기",
    },
    {
      id: 3,
      name: "에어팟 프로",
      price: 350000,
      emoji: "🎧",
      category: "전자기기",
    },
    {
      id: 4,
      name: "커피머신",
      price: 300000,
      emoji: "☕",
      category: "주방가전",
    },
    { id: 5, name: "게임 콘솔", price: 500000, emoji: "🎮", category: "게임" },
    {
      id: 6,
      name: "스마트 TV",
      price: 1000000,
      emoji: "📺",
      category: "전자기기",
    },
    {
      id: 7,
      name: "블루투스 스피커",
      price: 120000,
      emoji: "🔊",
      category: "오디오",
    },
    {
      id: 8,
      name: "전기밥솥",
      price: 150000,
      emoji: "🍚",
      category: "주방가전",
    },
    { id: 9, name: "보드게임", price: 50000, emoji: "🎲", category: "게임" },
    {
      id: 10,
      name: "스마트워치",
      price: 280000,
      emoji: "⌚",
      category: "전자기기",
    },
  ];
  
  // 장바구니 상태 관리
  const [cartItems, setCartItems] = useState([]);

  // 카트에 제품 추가
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
    if(existingItem) {
      return prevItems.map((item) => item.id === product.id ? {...item, quantity : item.quantity + 1} : item)
    } else {
      return [...prevItems, {...product, quantity: 1}]
    }
    })
  }

  return (
    <div>
      {/* 여기에 UI를 넣을 수 있습니다 */}
      <h1>React 쇼핑몰</h1>
    </div>
  );
}

export default App;