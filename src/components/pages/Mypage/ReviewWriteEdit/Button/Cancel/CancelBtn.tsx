"use client";
import { PrimaryButton } from "@/components/ui/Button/PrimaryButton";
import { useRouter } from "next/navigation";

interface CancelButtonProps {
  onClickCancel?: () => void;
  disabled?: boolean;
}

export default function CancelButton({ onClickCancel, disabled = false }: CancelButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClickCancel) {
      onClickCancel();
    } else {
      router.push("/myreviews");
    }
  };

  return (
    <>
      <PrimaryButton bgColor="white" textColor="black" line="on" onClick={handleClick} disabled={disabled}>
        취소하기
      </PrimaryButton>
    </>
  );
}
