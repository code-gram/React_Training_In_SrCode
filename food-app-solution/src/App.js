import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(true);
  };
  const closeCartHandler = () => {
    setIsCartShown(false);
  };
  return (
    <CartProvider>
      {isCartShown && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
