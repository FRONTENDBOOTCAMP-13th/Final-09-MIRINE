import AromaShooterIntro from "@/components/AromaShooter/AromaShooterIntro";
import MarqueeText from "@/components/AromaShooter/MarqueeText";
import AromaShooterShop from "@/components/AromaShooter/AromaShooterShop";
import AromaCartridge from "@/components/AromaShooter/AromaCartridge";

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
