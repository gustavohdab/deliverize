import React from "react";

interface IconButtonProps {
  title: string;
  Icon: React.ElementType;
  notification?: number;
  onClick?: () => void;
}

function IconButton({ title, Icon, notification, onClick }: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-transparent text-redSecondary text-base font-normal hover:text-opacity-50"
    >
      <div className="relative">
        <Icon className="text-redSecondary text-3xl hover:text-opacity-50" />
        {notification !== undefined && (
          <div
            className="absolute top-0 right-0 bg-orangePrimary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
            style={{ transform: "translate(50%,-50%)" }}
          >
            {notification}
          </div>
        )}
      </div>
      {title}
    </button>
  );
}

export default IconButton;
