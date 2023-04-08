import React from "react";

interface HintProps {
  title: string;
  subtitle?: string;
}

function Hint({ title, subtitle }: HintProps) {
  return (
    <aside className="flex flex-col py-3 px-[14px] bg-yellowPrimary">
      <h3 className="text-textPrimary font-medium leading-4 mb-2">{title}</h3>
      {subtitle && (
        <p className="text-textOrange text-xs leading-5">{subtitle}</p>
      )}
    </aside>
  );
}

export default Hint;
