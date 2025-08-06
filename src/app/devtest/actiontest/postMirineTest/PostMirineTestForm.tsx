"use client";
import { postMirineTest } from "@/lib/action";
import { getAccessToken, getUserID } from "@/lib/clientFunction";
import { getAllMirineTests } from "@/lib/function";
import { useActionState, useEffect } from "react";

export default function PostMirineTestForm() {
  const [crtState, formAction, isLoading] = useActionState(postMirineTest, null);
  console.log(isLoading, crtState);
  const token = getAccessToken();
  const userId = getUserID();
  useEffect(() => {
    if (crtState?.ok) console.log("crtState", crtState);
    else console.log("crtState", crtState);
    if (crtState?.ok) {
      const data = getAllMirineTests();
      console.log(data);
    }
  });
  return (
    <form action={formAction}>
      <p>답변 {sessionStorage.getItem("answer")}</p>
      <p>결과 {sessionStorage.getItem("product")}</p>
      <input type="hidden" name="user_id" defaultValue={userId} />
      <input type="hidden" name="token" defaultValue={token} />
      <input type="hidden" name="answer" defaultValue={sessionStorage.getItem("answer")!} />
      <input type="hidden" name="product" defaultValue={sessionStorage.getItem("product")!} />
      <button type="submit">제출</button>
    </form>
  );
}
