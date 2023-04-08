"use client";

import React, { createContext, useContext, useState } from "react";

interface CartPopoverData {
  productName: string;
  ingredients: { name: string; quantity: number }[];
  extraQuantity: number;
  show: boolean;
}

interface CartContextData {
  ordersCount: number;
  cartPopoverData: CartPopoverData;
  setCartPopoverData: (data: CartPopoverData) => void;
  addToCart: (quantity: number) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [ordersCount, setOrdersCount] = useState(0);
  const [cartPopoverData, setCartPopoverData] = useState<CartPopoverData>({
    productName: "",
    ingredients: [],
    extraQuantity: 0,
    show: false,
  });

  const addToCart = (quantity: number) => {
    setOrdersCount((prevCount) => prevCount + quantity);
  };

  return (
    <CartContext.Provider
      value={{
        ordersCount,
        cartPopoverData,
        setCartPopoverData,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider.");
  }

  return context;
}

export default CartProvider;


