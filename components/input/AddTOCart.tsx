"use client";


import { BsFillCartFill } from "react-icons/bs";
import React, { useContext } from "react";
import { CartContext } from "@/app/CartContext";
import { CartContextType } from "@/typing";

interface AddTOCartProps {
  productId: string;
}

const AddTOCart: React.FC<AddTOCartProps> = ({ productId }) => {
  const { products, addProduct, deleteProduct, isProduct } = useContext(
    CartContext
  ) as CartContextType;
  function toggleProduct(productId: string) {
    if (isProduct(productId)) {
      deleteProduct(productId);
    } else {
      addProduct(productId);
    }
  }
  return (
    <div className="AddCartBtn" onClick={() => toggleProduct(productId)}>
      <BsFillCartFill
        size={24}
        className={isProduct(productId) ? "fill-blue-500" : "fill-gray-300"}
      />
      <h3>Add to cart</h3>
    </div>
  );
};

export default AddTOCart;
