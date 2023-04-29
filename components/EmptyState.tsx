"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <header>
        <h3 className="text-2xl md:text-4xl font-bold">{title}</h3>
        <p className="text-base sm:text-lg ">{subtitle}</p>
      </header>
      <div className="w-44 mt-4">
        <button
          className="bg-blue-500 text-white text-xl text-center py-2 px-5 rounded-full active:scale-105 transition-transform duration-150 ease-in-out "
          onClick={() => router.push("/")}
        >
          click it
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
