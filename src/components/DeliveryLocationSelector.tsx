"use client";

import React, { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import useClickOutside from "@/hooks/useClickOutside";
import fakeAddresses from "@/utils/fakeAddressesData";

function DeliveryLocationSelector() {
  const [selectedAddress, setSelectedAddress] = useState(fakeAddresses[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleAddressClick = (address: string) => {
    setSelectedAddress(address);
    setShowDropdown(false);
  };

  useClickOutside(containerRef, () => setShowDropdown(false));

  return (
    <section className="relative sm:hidden md:block" ref={containerRef}>
      <div
        className="bg-white shadow w-56 h-12 px-3 py-1 flex items-center gap-2 rounded cursor-pointer"
        style={{ boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)" }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex flex-col text-sm">
          <span className="text-redSecondary">Entrega:</span>
          <span className="text-textPrimary font-bold">{selectedAddress}</span>
        </div>
        <div className="flex-grow" />
        <MdKeyboardArrowDown className="text-redSecondary text-xl" />
      </div>
      {showDropdown && (
        <div className="absolute z-10 mt-1 w-56 bg-white border border-gray-300 rounded shadow max-h-[200px] overflow-y-auto">
          {fakeAddresses.map((address, index) => (
            <article
              key={index}
              className={`text-textPrimary text-sm px-3 py-2 cursor-pointer ${
                address === selectedAddress
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleAddressClick(address)}
            >
              <p>{address}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default DeliveryLocationSelector;
