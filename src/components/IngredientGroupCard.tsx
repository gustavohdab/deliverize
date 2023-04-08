"use client"

import React, { useState } from "react";
import { IngredientGroup, Ingredient } from "@/utils/types-interfaces-api";
import { RiSubtractFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";

interface IngredientGroupCardProps {
  ingredientGroup: IngredientGroup;
  onIngredientQuantityChange: (
    ingredientId: string,
    newQuantity: number
  ) => void;
}

function IngredientGroupCard({
  ingredientGroup,
  onIngredientQuantityChange,
}: IngredientGroupCardProps) {
  const [quantities, setQuantities] = useState<number[]>(
    Array(ingredientGroup.itens.length).fill(0)
  );
  const [totalExtras, setTotalExtras] = useState(0);

  const increment = (index: number) => {
    if (totalExtras < 8) {
      const newQuantities = [...quantities];
      newQuantities[index]++;
      setQuantities(newQuantities);
      setTotalExtras(totalExtras + 1);
      onIngredientQuantityChange(
        ingredientGroup.itens[index].id.toString(),
        newQuantities[index]
      );
    }
  };

  const decrement = (index: number) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index]--;
      setQuantities(newQuantities);
      setTotalExtras(totalExtras - 1);
      onIngredientQuantityChange(
        ingredientGroup.itens[index].id.toString(),
        newQuantities[index]
      );
    }
  };

  const getItemPrice = (index: number) => {
    const basePrice = ingredientGroup.itens[index].vl_item;
    const extraCount = quantities[index];

    const price = extraCount <= 1 ? basePrice : basePrice * extraCount;

    return price.toFixed(2);
  };

  return (
    <section className="p-2 my-2">
      {ingredientGroup.itens.map((ingredient: Ingredient, index: number) => (
        <article
          key={ingredient.id}
          className={`flex flex-col justify-between items-end ${
            index < ingredientGroup.itens.length - 1
              ? "border-b border-yellowDark"
              : ""
          } pb-2 mb-2`}
        >
          <header className="w-full text-left text-textPrimary font-medium text-sm leading-4">
            <h3>{ingredient.nm_item}</h3>
          </header>
          <div className="flex items-center border border-yellowDark rounded-[5px] px-4 py-2">
            <button
              onClick={() => decrement(index)}
              className={`text-2xl ${
                quantities[index] === 0 ? "opacity-50" : "text-redSecondary"
              }`}
              disabled={quantities[index] === 0}
            >
              <RiSubtractFill />
            </button>
            <span className="mx-2">{quantities[index]}</span>
            <button
              onClick={() => increment(index)}
              className={`text-2xl ${
                totalExtras >= 8 ? "opacity-50" : "text-redSecondary"
              }`}
              disabled={totalExtras >= 8}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <footer className="w-full text-left text-orangePrimary">
            <p>+ R$ {getItemPrice(index)}</p>
          </footer>
        </article>
      ))}
    </section>
  );
}

export default IngredientGroupCard;
