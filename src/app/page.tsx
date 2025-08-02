import MainVisualSlide from "@/components/Home/MainVisualSlide";
import FindScent from "@/components/Home/FindScent";
import MirineShop from "@/components/Home/MirineShop";
import PerfumeShop from "@/components/Home/PerfumeShop";
import AromaShooter from "@/components/Home/AromaShooter";
import ReviewSlide from "@/components/Home/ReviewSlide";

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
