"use client";

import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import { CartContextProvider } from "@/app/CartContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartContextProvider>
      <Navbar />
      <Container>{children}</Container>
    </CartContextProvider>
  );
};

export default Layout;
