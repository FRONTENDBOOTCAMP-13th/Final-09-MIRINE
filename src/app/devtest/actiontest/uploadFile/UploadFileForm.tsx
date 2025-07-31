"use client";
import { useActionState, useEffect } from "react";
import { uploadFileForDev } from "@/lib/action";

export default function UploadFileForm() {
  const [crtState, formAction, isLoading] = useActionState(uploadFileForDev, null);
  console.log(isLoading, crtState);
  useEffect(() => {
    if (crtState?.ok) console.log("crtState", crtState);
    else console.log("crtState", crtState);
    if (crtState?.ok) {
      console.log("crtState", crtState);
    }
  });

  return (
    <form action={formAction}>
      <input type="file" name="attach" multiple />

      <button type="submit" style={{ marginTop: "20px", border: "1px solid black" }}>
        제출
      </button>
    </form>
  );
}
