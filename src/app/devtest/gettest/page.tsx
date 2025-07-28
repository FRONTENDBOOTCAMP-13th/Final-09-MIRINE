"use client";
import { getAccessToken } from "@/lib/clientFunction";
import { getAllLikes, getAllMirineTests, getAllOrders, getAllPerfumes, getAllReivews, getAllUsers, getMyMirineTests, getMyReivews, getProduct, getProductsReivews, getReivew } from "@/lib/function";
import Link from "next/link";
export default function Gettest() {
  const token = getAccessToken();
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <p>
          토큰이 없다면
          <Link href="/devtest/actiontest/postUser" style={{ paddingInline: "4px", textDecoration: "underline", color: "blue" }}>
            로그인
          </Link>
          에서
        </p>
        <br />
        <p>아이디: karina@market.com / 비밀번호: 11111111</p>
        <br />
        <p>혹은</p>
        <br />
        <p>아이디: eunwoo@market.com / 비밀번호: 11111111</p>
        <br />
        <p>파란 테두리는 토큰 필요</p>
        <br />
        <p>빨간 테두리는 대상 id 필요</p>
      </div>
      <div style={{ marginTop: "20px", borderTop: "4px solid black", paddingTop: "20px", marginInline: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", alignItems: "center" }}>
        <button
          type="button"
          style={{ border: "4px solid black", borderRadius: "20px" }}
          onClick={() => {
            console.log("getAllPerfumes", getAllPerfumes());
          }}
        >
          getAllPerfumes
        </button>
        <button
          type="button"
          style={{ border: "4px solid blue", borderRadius: "20px" }}
          onClick={() => {
            console.log("getAllOrders", getAllOrders(token));
          }}
        >
          getAllOrders
        </button>
        <button
          type="button"
          style={{ border: "4px solid black", borderRadius: "20px" }}
          onClick={() => {
            console.log("getAllReivews", getAllReivews());
          }}
        >
          getAllReivews
        </button>
        <button
          type="button"
          style={{ border: "4px solid black", borderRadius: "20px" }}
          onClick={() => {
            console.log("getAllUsers", getAllUsers());
          }}
        >
          getAllUsers
        </button>
        <button
          type="button"
          style={{ border: "4px solid blue", borderRadius: "20px" }}
          onClick={() => {
            console.log("getMyMirineTests", getMyMirineTests(token));
          }}
        >
          getMyMirineTests
        </button>
        <button
          type="button"
          style={{ border: "4px solid black", borderRadius: "20px" }}
          onClick={() => {
            console.log("getAllMirineTests", getAllMirineTests());
          }}
        >
          getAllMirineTests
        </button>
        <button
          type="button"
          style={{ border: "4px solid blue", borderRadius: "20px" }}
          onClick={() => {
            console.log("getMyReivews", getMyReivews(token));
          }}
        >
          getMyReivews
        </button>
        <button
          type="button"
          style={{ border: "4px solid red", borderRadius: "20px" }}
          onClick={() => {
            console.log("getReivew", getReivew(1));
          }}
        >
          getReivew
        </button>
        <button
          type="button"
          style={{ border: "4px solid red", borderRadius: "20px" }}
          onClick={() => {
            console.log("getProductsReivews", getProductsReivews(2));
          }}
        >
          getProductsReivews
        </button>
        <button
          type="button"
          style={{ border: "4px solid blue", borderRadius: "20px" }}
          onClick={() => {
            console.log("getAllLikes", getAllLikes(token));
          }}
        >
          getAllLikes
        </button>

        <button
          type="button"
          style={{ border: "4px solid red", borderRadius: "20px" }}
          onClick={() => {
            console.log("getProduct", getProduct(5));
          }}
        >
          getProduct
        </button>
      </div>
    </>
  );
}
