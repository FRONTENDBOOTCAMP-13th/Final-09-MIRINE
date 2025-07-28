"use server";

import {} from "@/types/type";
import { getProduct } from "./function";
const URL = process.env.OPEN_MARKET_URL;
const CLIENT_ID = process.env.CLIENT_ID;

/* 향수 관련 함수 */

/* 리뷰 관련 함수 */
/**
 * POST /replies
 */
export async function postReview(state, formData: FormData) {
  try {
    const uploadFiles: File[] = formData.getAll("uploadImages") as File[];
    const uploadImages = uploadFiles.map(async (item) => {
      if (item.size > 0) {
        const imageRes = await uploadFile(item);
        return imageRes.item[0].path;
      }
    });
    const body = {
      user_id: formData.get("user_id"),
      user: formData.get("user"),
      order_id: formData.get("order_id"),
      product_id: formData.get("product_id"),
      rating: formData.get("rating"),
      content: formData.get("content"),
      uploadImages: uploadImages,
      token: formData.get("token"),
    };
    const res = await fetch(`${URL}/replies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${body.token}`,
        "Content-Type": "application/json",
        "Client-Id": CLIENT_ID || "",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/**
 * PATCH /replies/{_id}
 */

/**
 * DELETE /replies/{_id}
 */
export async function deleteReview(id: number, token: string) {
  try {
    const res = await fetch(`${URL}/replies/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-Id": CLIENT_ID || "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/* 주문 관련 함수 */
/**
 * POST /orders
 */
export async function postOrder(state, formData: FormData) {
  const productIDList: string[] = formData.getAll("productIDList") as string[];
  const products = productIDList.map(async (product_id: string) => {
    const productDataPromise = await getProduct(+product_id);
    const productData = await productDataPromise.json();
    return productData.item;
  });
  try {
    const body = {
      user_id: formData.get("user_id"),
      products: products,
      cost: { total: formData.get("total") || 0 },
      token: formData.get("token"),
    };
    if (body.cost.total === 0) {
      const resolvedProducts = await Promise.all(products);
      body.cost.total = resolvedProducts.reduce((sum, item) => sum + item.price, 0);
    }
    const res = await fetch(`${URL}/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${body.token}`,
        "Content-Type": "application/json",
        "Client-Id": CLIENT_ID || "",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/**
 * PATCH /orders/{_id}
 */

/* 찜 관련 함수 */
/**
 * POST /bookmarks/product
 */

/**
 * DELETE /bookmarks/{_id}
 */
export async function deleteLike(id: number, token: string) {
  try {
    const res = await fetch(`${URL}/bookmarks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-Id": CLIENT_ID || "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/* 회원 관련 함수 */
/**
 * POST /users/login
 */
export async function login(state, formData: FormData) {
  const body = Object.fromEntries(formData.entries());
  try {
    const res = await fetch(`${URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Id": CLIENT_ID || "",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/**
 * POST /users
 */
export async function postUser(state, formData: FormData) {
  // 임시데이터
  const body = {
    type: "user",
    email: formData.get("email") || "test@test.com",
    password: formData.get("password") || "1111",
    name: formData.get("name") || "이름",
    address: formData.get("address") || "주소",
  };
  // const info = {
  //   type: "user",
  //   email: "aa@bbb.cc",
  //   password: "1111",
  //   name: "이름",
  // };
  try {
    const res = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Id": CLIENT_ID || "",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/**
 * PATCH /users{_id}
 */

/* 미리내 테스트 관련 함수 */
/**
 * POST /posts
 */

/* 파일 관련 함수 */
/**
 * POST /files
 */
export async function uploadFile(file: File) {
  const body = new FormData();
  body.append("attach", file);

  const res = await fetch(`${URL}/files`, {
    method: "POST",
    headers: {
      "Client-Id": CLIENT_ID ?? "",
    },
    body: body,
  });
  const data = await res.json();
  return data;
}
