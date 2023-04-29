"use client";

import useProduct from "@/app/hooks/useProductById";
import Image from "next/image";
import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import AddTOCart from "./AddTOCart";
import { useRouter } from "next/navigation";

interface FullInfoListingCardProps {
  productId: string;
}

const FullInfoListingCard: React.FC<FullInfoListingCardProps> = ({
  productId,
}) => {
  const router = useRouter();
  const { data: product } = useProduct(productId);

  
  

  function truncateString(string = "", maxLength = 50) {
    let returnString = "";
    if (string.length > maxLength) {
      returnString = `${string.substring(0, maxLength)}…`;
    } else {
      returnString = string;
    }
    return returnString;
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
      <div
        onClick={() => router.push(`/products/${product?.id}`)}
        className="h-[200px] w-[200px] sm:h-[250px] relative flex justify-center items-center flex-shrink-0  cursor-pointer"
      >
        <Image
          src={product?.images[0]}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center", borderRadius: '10px' }}
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="gap-3">
          <h3 className="text-2xl md:text-3xl font-bold">{product?.title}</h3>
          <p className="text-base sm:text-lg max-w-3xl">
            {truncateString(product?.description, 200)}
          </p>
        </div>
        <div className="flex items-center space-x-5 ">
          <div className="flex items-center space-x-1">
            <BsCurrencyRupee className="h-8" />
            <h3 className="text-xl font-bold">{product?.price}</h3>
          </div>
          <AddTOCart productId={product?.id} />
        </div>
      </div>
    </div>
  );
};

export default FullInfoListingCard;
