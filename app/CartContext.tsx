"use client";

import { CartContextType } from "@/typing";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext<CartContextType | null>(null);

interface CartContextProps {
  children: React.ReactNode;
}
import React from "react";

export const CartContextProvider: React.FC<CartContextProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<string[]>([]);
  const ls = typeof window !== 'undefined' ? window.localStorage : null;
  
  useEffect(() => {
    if (products?.length > 0) {
      ls?.setItem('cart', JSON.stringify(products));
    }
  }, [products]);

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setProducts(JSON.parse(ls.getItem('cart')!));
    }
  }, []);

  function addProduct(productId: string) {
    setProducts([...products, productId]);
  }
  function deleteProduct(productId: string) {
    if (!products) {
        return;
    }
    let Products = products.filter((id) => id !== productId);
    setProducts([...Products]);
  }
  function allEmpty() {
    setProducts([]);
  }
  function isProduct(productId: string) {
    const list = products || [];
    return list.includes(productId);
  }
  
  return (
    <CartContext.Provider value={{ products, addProduct, deleteProduct, isProduct, allEmpty }}>
      {children}
    </CartContext.Provider>
  );
};
