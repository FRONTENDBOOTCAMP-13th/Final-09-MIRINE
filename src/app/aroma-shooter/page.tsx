import AromaShooterIntro from "@/components/pages/AromaShooter/AromaShooterIntro";
import MarqueeText from "@/components/pages/AromaShooter/MarqueeText";
import AromaShooterShop from "@/components/pages/AromaShooter/AromaShooterShop";
import AromaCartridge from "@/components/pages/AromaShooter/AromaCartridge";

export default function AromaShooter() {
  return (
    <>
      <AromaShooterIntro />
      <MarqueeText />
      <AromaShooterShop />
      <AromaCartridge />
    </>
  );
}
