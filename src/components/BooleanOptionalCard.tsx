"use client"

import React, { useState } from "react";
import { Ingredient } from "@/utils/types-interfaces-api";
import formatBooleanOption from "@/utils/formatBooleanOption";

interface BooleanOptionCardProps {
  options: Ingredient[];
}

function BooleanOptionCard({ options }: BooleanOptionCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (optionId: number) => {
    if (selectedOption === optionId) {
      setSelectedOption(null);
    } else {
      setSelectedOption(optionId);
    }
  };

  return (
    <section className="mt-2 lg:hidden">
      {options.map((option) => (
        <div
          key={option.id}
          className="flex justify-between items-center mb-2 cursor-pointer"
        >
          <span onClick={() => handleOptionClick(option.id)}>
            {formatBooleanOption(option.nm_item)}
          </span>
          <label className="inline-block relative border rounded-full border-yellowDark p-1 h-5 w-5">
            <input
              type="radio"
              name="booleanOption"
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => {}}
              onClick={() => handleOptionClick(option.id)}
              className="appearance-none absolute inset-0 w-full h-full rounded-full bg-white checked:bg-yellowDark opacity-0"
            />
            <span
              className={`absolute inset-0 w-full h-full rounded-full bg-yellowDark transform scale-0 transition ${
                selectedOption === option.id ? "scale-100" : ""
              }`}
            />
          </label>
        </div>
      ))}
    </section>
  );
}

export default BooleanOptionCard;