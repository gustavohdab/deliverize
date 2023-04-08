"use client";

import Image, { StaticImageData } from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MobileSidebar, Navbar } from "./index";

type HeaderProps = {
  logo: StaticImageData;
};

function Header({ logo }: HeaderProps) {
  return (
    <header className="flex items-center just bg-primary shadow-header sm:h-[80px] h-[56px] fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-evenly sm:justify-between items-center max-w-[1440px] px-4 mx-auto gap-4 w-full h-full">
        <button className="absolute left-0 ml-[16px]">
          <MdOutlineKeyboardArrowLeft className="text-[24px] text-[#686868] hover:text-black sm:hidden" />
        </button>
        <figure>
          <Image
            src={logo}
            alt="logo"
            className="
            w-[200px] object-contain rounded-[5px] sm:w-[226px]
            mr-6
          "
            priority
          />
        </figure>
        <Navbar />
      </div>
      <MobileSidebar />
    </header>
  );
}

export default Header;
