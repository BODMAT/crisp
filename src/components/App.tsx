import { PopUpPortal } from "../portals/PopUp.portal";
import { FixedHeader } from "./FixedHeader";
import { Footer } from "./Footer";
import { ProductSlider } from "./Swiper/ProductSlider";

export function App() {
  return (
    <section className="w-full min-h-screen overflow-hidden flex flex-col justify-between">
      <FixedHeader />
      <main className="bg-[var(--color-divider)] min-h-[calc(100vh-160px)] flex flex-col justify-center transitioned flex-1">
        <ProductSlider />
      </main>
      <Footer />

      {/* All PopUps in one portal */}
      <PopUpPortal />
    </section>
  )
}
