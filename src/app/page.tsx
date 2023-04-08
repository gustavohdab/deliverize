import { Roboto } from "next/font/google";
import logo from "../../public/logo.png";
import CartProvider from "@/contexts/CartContext";
import {
  DeliveryProductCard,
  DeliveryProductCustomization,
  Header,
} from "@/components/index";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <CartProvider>
      <main className={`${roboto.className} pt-16 sm:pt-20`}>
        <Header logo={logo} />
        <section className="flex flex-wrap items-center p-4 sm:p-8 sm:px-16 sm:gap-x-28 max-w-[1440px] mx-auto">
          <DeliveryProductCard />
          <DeliveryProductCustomization />
        </section>
      </main>
    </CartProvider>
  );
}
