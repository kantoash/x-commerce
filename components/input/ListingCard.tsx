"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import AddTOCart from "./AddTOCart";
import useCurrentUser from "@/app/hooks/useCurrentUser";

interface ListingCardProps {
    product: Product;
}

const ListingCard: React.FC<ListingCardProps> = ({ product }) => {
    const router = useRouter();
    const { data: currentUser } = useCurrentUser();
    return (
        <div className="flex flex-col justify-center cursor-pointer items-center p-3 space-y-5 h-[350px] w-[350px]">
            <div onClick={() => router.push(`/products/${product?.id}`)} className="h-40 w-40 relative">
                <Image
                    src={product?.images[0]}
                    fill
                    alt=""
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="flex flex-col justify-center items-center space-y-1 ">
                <p className="text-xl ">{product?.title}</p>
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

export default ListingCard;
