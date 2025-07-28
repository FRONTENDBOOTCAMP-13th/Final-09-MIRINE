"use client";

import { useEffect, useState } from "react";
import PostMirineTestForm from "./PostMirineTestForm";

export default function MirineTestEx() {
  const [problemCount, setProblemCount] = useState(1);
  const [isResult, setIsResult] = useState(false);
  const [randomNum, setRandomNum] = useState<number[]>([]);
  useEffect(() => {
    sessionStorage.setItem("answer", "");
  }, []);
  useEffect(() => {
    if (problemCount === 5) setIsResult(true);
  }, [problemCount]);
  useEffect(() => {
    const numList = [];
    numList.push(Math.floor(Math.random() * 9 + 1));
    numList.push(Math.floor(Math.random() * 9 + 1));
    numList.push(Math.floor(Math.random() * 9 + 1));
    let str = "";
    numList.forEach((item) => (str += item));
    sessionStorage.setItem("product", str);
    setRandomNum(numList);
  }, [isResult]);
  return (
    <div>
      {!isResult ? (
        <>
          <p>질문 {problemCount}</p>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
            <button
              type="button"
              style={{ border: "4px black solid", width: "40px" }}
              onClick={() => {
                sessionStorage.setItem("answer", sessionStorage.getItem("answer") + "1");
                setProblemCount((count) => count + 1);
              }}
            >
              1
            </button>
            <button
              type="button"
              style={{ border: "4px black solid", width: "40px" }}
              onClick={() => {
                sessionStorage.setItem("answer", sessionStorage.getItem("answer") + "2");
                setProblemCount((count) => count + 1);
              }}
            >
              2
            </button>
            <button
              type="button"
              style={{ border: "4px black solid", width: "40px" }}
              onClick={() => {
                sessionStorage.setItem("answer", sessionStorage.getItem("answer") + "3");
                setProblemCount((count) => count + 1);
              }}
            >
              3
            </button>
            <button
              type="button"
              style={{ border: "4px black solid", width: "40px" }}
              onClick={() => {
                sessionStorage.setItem("answer", sessionStorage.getItem("answer") + "4");
                setProblemCount((count) => count + 1);
              }}
            >
              4
            </button>
          </div>
        </>
      ) : (
        <PostMirineTestForm />
      )}
    </div>
  );
}
