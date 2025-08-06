"use client";
import { PrimaryButton } from "@/components/ui/Button/PrimaryButton";

interface RegisterButtonProps {
  onClickRegister: () => void;
  buttonText?: string;
  disabled?: boolean;
}

export default function RegisterButton({ onClickRegister, buttonText = "등록하기", disabled = false }: RegisterButtonProps) {
  return (
    <>
      <PrimaryButton bgColor="blue-100" textColor="blue" line="blue" onClick={onClickRegister} disabled={disabled}>
        {buttonText}
      </PrimaryButton>
    </>
  );
}
