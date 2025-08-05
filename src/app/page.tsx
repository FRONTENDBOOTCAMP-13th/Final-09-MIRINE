import MainVisualSlide from "@/components/pages/Home/MainVisualSlide";
import FindScent from "@/components/pages/Home/FindScent";
import MirineShop from "@/components/pages/Home/MirineShop";
import PerfumeShop from "@/components/pages/Home/PerfumeShop";
import AromaShooter from "@/components/pages/Home/AromaShooter";
import ReviewSlide from "@/components/pages/Home/ReviewSlide";

export default function Home() {
  return (
    <>
      <MainVisualSlide />
      <FindScent />
      <MirineShop />
      <PerfumeShop />
      <AromaShooter />
      <ReviewSlide />
    </>
  );
}
