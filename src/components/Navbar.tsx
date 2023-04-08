import React from "react";
import DeliveryLocationSelector from "./DeliveryLocationSelector";
import { RiAccountCircleLine } from "react-icons/ri";
import SearchBar from "./SearchBar";
import IconButton from "./IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartPopover from "./CartPopover";
import { useCart } from "@/contexts/CartContext";

function Navbar() {
  const { ordersCount, cartPopoverData, setCartPopoverData } = useCart();

  return (
    <nav className="hidden sm:flex items-center gap-6">
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
    </nav>
  );
}

export default Navbar;
