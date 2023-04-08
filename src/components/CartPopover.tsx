"use client"

import React, { useEffect } from "react";
import { Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

interface CartPopoverProps {
  productName: string;
  ingredients: { name: string; quantity: number }[];
  show: boolean;
  onClose: () => void;
}

function CartPopover({
  productName,
  ingredients,
  show,
  onClose,
}: CartPopoverProps) {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <section
      className={`${robotoCondensed.className} absolute z-10 shadow-md rounded-b-md top-full mt-2 right-[-25px] w-[220px] h-8`}
    >
      <div className="relative w-full h-2">
        <div className="absolute top-2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orangePrimary rotate-45" />
      </div>
      <header className="bg-orangePrimary text-white font-semibold text-lg p-4 rounded-t">
        Adicionado com sucesso
      </header>
      <article className="bg-[#F8F8F8] p-4 rounded-b">
        <h2 className="text-redSecondary mb-2 text-sm font-bold">
          {productName}
        </h2>
        <p className="text-xs text-textPrimary">Ingredientes:</p>
        <ul>
          {ingredients.map(({ name, quantity }, index) => (
            <li key={index} className="mt-1 text-xs">
              {quantity} {name}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default CartPopover;
