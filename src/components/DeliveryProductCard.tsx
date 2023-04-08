"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Burger from "@/../public/burger.svg";
import { Product } from "@/utils/types-interfaces-api";
import DeliveryProductCardSkeletonLoader from "@/skeletons/DeliveryProductCardSkeletonLoader";

function DeliveryProductCard() {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products"
      );
      const data: Product[] = await response.json();
      setProduct(data[0]);
    }
    fetchData();
  }, []);

  if (!product) {
    return <DeliveryProductCardSkeletonLoader />;
  }

  return (
    <article className="w-full lg:w-[45%] pb-7 lg:pb-0">
      <figure>
        <Image // Link do fetch está quebrado, por isso o uso da imagem estática com a tag Image do next.js
          priority
          src={Burger}
          alt={product.nm_product}
          className="w-full h-[130px] object-contain rounded-[5px] sm:h-[250px] md:h-[390px]"
        />
      </figure>
      <h3 className="font-medium pt-6 pb-4 text-textPrimary leading-4 sm:text-[28px] sm:leading-[28px]">
        {product.nm_product}
      </h3>
      <p className="font-normal text-textPrimary leading-5 sm:text-xl sm:leading-[24px] sm:py-6">
        {product.description}
      </p>
      <div className="flex items-left pt-4 gap-4 leading-4 sm:text-[32px] sm:leading-[38px]">
        <p className=" text-textOrange">R$ {product.vl_discount.toFixed(2)}</p>
        <p className="text-textPrimary">
          <span className="lower-line-through">
            R$ {product.vl_price.toFixed(2)}
          </span>
        </p>
      </div>
    </article>
  );
}

export default DeliveryProductCard;
