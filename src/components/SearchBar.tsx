"use client";

import React, { useState, useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import fakeSearchData from "@/utils/fakeSearchData";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchContainer = useRef<HTMLDivElement>(null);

  useClickOutside(searchContainer, () => setIsOpen(false));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleSelect = (item: string) => {
    setSearchTerm(item);
    setIsOpen(false);
  };

  const filteredResults = fakeSearchData.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="relative sm:hidden xl:block" ref={searchContainer}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Busque por estabelecimento ou produtos"
        className="w-[354px] h-12 px-3 py-1 border border-redSecondary rounded text-textPrimary placeholder:text-grayDarker placeholder:text-[14px] placeholder:leading-[10px]"
      />
      {searchTerm && isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow max-h-[200px] overflow-y-auto">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <div
                key={index}
                className="text-textPrimary text-sm px-3 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))
          ) : (
            <div className="text-textPrimary text-sm px-3 py-2">
              Nenhum resultado encontrado...
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default SearchBar;
