"use client";

import {
  Bars3Icon,
  BuildingStorefrontIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Avatar from "./input/Avatar";
import { motion } from "framer-motion";
import SideBar from "./sidebar/SideBar";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useLoginModal from "@/app/hooks/useLoginModal";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import { signOut } from 'next-auth/react'
import useSearchModal from "@/app/hooks/useSearchModal";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const loginModal = useLoginModal();
  const searchModal = useSearchModal();
  const { data: user } = useCurrentUser();  
  
  const MenuModal = () => {
    return (
      <motion.main
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-50"
      >
        <div className="bg-blue-300  w-3/4 h-3/4 flex flex-col items-center space-y-5 justify-center mx-auto rounded-3xl mt-14 relative overflow-hidden">
          <div
            onClick={() => setIsOpen((val) => !val)}
            className="border text-white border-white p-1 rounded-full cursor-pointer"
          >
            <XMarkIcon className="h-6" />
          </div>
          <h3 className="text-lg">{user?.name}</h3>
          <SideBar />
        </div>
      </motion.main>
    );
  };

  const authToggle = () => {
    if (user) {
      signOut();
    }else {
      loginModal.onOpen();
    }
  }

  return (
    <nav
      className={`p-2 bg-blue-400 text-white flex justify-between items-center rounded-xl shadow-md shadow-gray-400 gap-4 max-w-7xl mx-auto`}
    >
      <section
        onClick={() => router.push("/")}
        className={
          "flex items-center space-x-1 text-lg whitespace-nowrap cursor-pointer"
        }
      >
        <BuildingStorefrontIcon className="h-5" />
        <span>Ecommerce</span>
      </section>
      <section onClick={searchModal.onOpen} className="hidden sm:inline-flex flex-grow bg-blue-300 rounded-md max-w-xl mx-auto px-5 py-2 ">
        <input
          placeholder="Search your product..."
          className="flex-grow bg-transparent outline-none placeholder:text-white"
        />
        <div className="p-1 bg-blue-300 rounded-full text-white ">
          <MagnifyingGlassIcon className="h-6" />
        </div>
      </section>
      <section className="flex items-center space-x-1  bg-blue-300 p-2 rounded-xl">
        <div
          onClick={() => setIsOpen((val) => !val)}
          className="cursor-pointer"
        >
          <Bars3Icon className="h-7" />
        </div>
        <div onClick={authToggle}>
          <Avatar src={user?.image} />
        </div>
      </section>
      {isOpen && <MenuModal />}
    </nav>
  );
};

export default Navbar;
