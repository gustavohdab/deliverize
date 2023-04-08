"use client";

import React, { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdClose, MdReorder, MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "@/contexts/CartContext";
import {
  DeliveryLocationSelector,
  SearchBar,
  IconButton,
  CartPopover,
} from "./index";

function MobileSidebar() {
  const { ordersCount, cartPopoverData, setCartPopoverData } = useCart();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative right-0 mr-[16px]">
      <button onClick={() => setIsOpen(true)} className="sm:hidden">
        <MdReorder className="text-[24px] text-[#686868] hover:text-black" />
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-white sm:hidden">
          <div className="p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 left-4"
            >
              <MdClose className="text-[24px] text-[#686868] hover:text-black" />
            </button>
            <div className="flex flex-col items-end justify-center h-full space-y-6">
              <DeliveryLocationSelector />
              <SearchBar />
              <IconButton title="Entrar" Icon={RiAccountCircleLine} />
              <div className="relative">
                <IconButton
                  title="Carrinho"
                  Icon={MdOutlineShoppingCart}
                  notification={ordersCount}
                />
                <CartPopover
                  productName={cartPopoverData.productName}
                  ingredients={cartPopoverData.ingredients}
                  show={cartPopoverData.show}
                  onClose={() =>
                    setCartPopoverData({ ...cartPopoverData, show: false })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MobileSidebar;
