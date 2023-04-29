"use client";

import { motion } from "framer-motion";
import React, { useContext } from "react";
import {
  HomeIcon,
  QueueListIcon,
  ArchiveBoxIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { SideBarMotion, SidebarOptionMotion } from "../../app/store";
import { CartContextType } from "@/typing";
import { CartContext } from "@/app/CartContext";

const SideBar = () => {
  const inactiveLink = "flex items-center space-x-1 cursor-pointer";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-lg p-1";
  const pathname = usePathname();
  const { products } = useContext(CartContext) as CartContextType;
  return (
    <motion.nav
      variants={SideBarMotion}
      initial="initial"
      animate="animate"
      className="mt-10 flex flex-col gap-4 items-center justify-center text-lg"
    >
      <motion.a
        variants={SidebarOptionMotion}
        href="/"
        className={pathname === "/" ? activeLink : inactiveLink}
      >
        <HomeIcon className="h-5" />
        <span>Dashboard</span>
      </motion.a>
      <motion.a
        variants={SidebarOptionMotion}
        href="/products"
        className={pathname?.includes("/products") ? activeLink : inactiveLink}
      >
        <ArchiveBoxIcon className="h-5" />
        <span>Products</span>
      </motion.a>
      <motion.a
        variants={SidebarOptionMotion}
        href="/orders"
        className={pathname?.includes("/orders") ? activeLink : inactiveLink}
      >
        <QueueListIcon className="h-5" />
        <span>Orders</span>
      </motion.a>
      <motion.a
        variants={SidebarOptionMotion}
        href="/shopcart"
        className={pathname?.includes("/shopcart") ? activeLink : inactiveLink}
      >
        <div className="relative flex items-center space-x-2">
          <ShoppingCartIcon className="h-5" />
          <h3>Cart</h3>
          {products && (
            <h2 className="bg-gray-200 px-2 rounded-full absolute text-sm -top-3 -right-3 text-gray-600">
              {products.length}
            </h2>
          )}
        </div>
      </motion.a>
    </motion.nav>
  );
};

export default SideBar;
