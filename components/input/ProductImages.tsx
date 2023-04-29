"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div>
      <div className="h-[350px] w-[350px] relative flex justify-center items-center flex-shrink-0">
        <Image
          src={activeImage}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
      <div className="mt-8 flex flex-row items-center gap-4">
        {images &&
          images.map((image) => (
            <div
              className={` p-2 ${
                activeImage === image && "border border-gray-300"
              } rounded-3xl cursor-pointer`}
              onClick={() => setActiveImage(image)}
            >
              <Image
                src={image}
                alt=""
                height={80}
                width={80}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImages;
