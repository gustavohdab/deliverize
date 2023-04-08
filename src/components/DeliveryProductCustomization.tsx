"use client";

import React, { useState, useEffect } from "react";
import { Product, IngredientGroup } from "@/utils/types-interfaces-api";
import { RiSubtractFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { useCart } from "@/contexts/CartContext";
import { Hint, IngredientGroupCard, BooleanOptionCard } from "./index";
import DeliveryProductCustomizationSkeletonLoader from "@/skeletons/DeliveryProductCustomizationSkeletonLoader";

function DeliveryProductCustomization() {
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, setCartPopoverData } = useCart();
  const [extraIngredientQuantities, setExtraIngredientQuantities] = useState<{
    [id: string]: number;
  }>({});

  const handleExtraIngredientChange = (
    ingredientId: string,
    newQuantity: number
  ) => {
    setExtraIngredientQuantities((prevQuantities) => ({
      ...prevQuantities,
      [ingredientId]: newQuantity,
    }));
  };

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

  const handleAddToCartWithPopover = () => {
    if (product) {
      const ingredientsWithQuantity = extraIngredients.flatMap((group) =>
        group.itens.map((item) => ({
          name: item.nm_item,
          quantity: (extraIngredientQuantities[item.id] || 0) + 1,
        }))
      );

      setCartPopoverData({
        productName: product.nm_product,
        ingredients: ingredientsWithQuantity,
        extraQuantity: quantity,
        show: true,
      });
      handleAddToCart();
    }
  };

  if (!product) {
    return <DeliveryProductCustomizationSkeletonLoader />;
  }

  const extraIngredients = product.ingredients.filter(
    (ingredientGroup) => ingredientGroup.group === "Ingredientes Extras"
  );

  const utensilsOptions =
    product.ingredients.find(
      (ingredientGroup) => ingredientGroup.group === "Precisa de Talher?"
    )?.itens || [];

  const handleAddToCart = () => {
    console.log("Adicionar ao carrinho", quantity);
    addToCart(quantity);
  };

  return (
    <section className="w-full lg:w-[40%] mx-auto sm:border sm:border-borderCard sm:rounded-[8px] sm:p-8">
      <Hint title="Adicionar Ingredientes" subtitle="Até 8 ingredientes." />
      {extraIngredients.map(
        (ingredientGroup: IngredientGroup, index: number) => (
          <IngredientGroupCard
            key={index}
            ingredientGroup={ingredientGroup}
            onIngredientQuantityChange={handleExtraIngredientChange}
          />
        )
      )}
      <Hint title="Precisa de Talher?" />

      <BooleanOptionCard options={utensilsOptions} />

      <div className="flex mt-6 gap-4">
        <div className=" flex items-center justify-center border border-yellowDark rounded-[5px] w-36 ">
          <button
            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            className={`text-2xl h-10 ${
              quantity === 1 ? "opacity-50" : "text-redSecondary"
            }`}
            disabled={quantity === 1}
          >
            <RiSubtractFill />
          </button>
          <span className="mx-2 px-4">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="text-2xl"
          >
            <AiOutlinePlus className="text-redSecondary" />
          </button>
        </div>
        <button
          onClick={handleAddToCartWithPopover}
          className="bg-orangePrimary text-white font-semibold py-2 px-4 rounded flex-grow hover:bg-opacity-80"
        >
          Adicionar
        </button>
      </div>
    </section>
  );
}

export default DeliveryProductCustomization;
