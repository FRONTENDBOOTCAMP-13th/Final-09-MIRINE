"use server";

import { getUser } from "./function";

// body에 token 넣어서 보낸거 수정해야 함

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
    const uploadImages = await Promise.all(
      uploadFiles.map(async (item) => {
        if (item.size > 0) {
          const imageFormData = new FormData();
          imageFormData.append("attach", item);
          const imageRes = await uploadFile(imageFormData);
          return imageRes.item[0].path;
        }
      })
    );
    const extra = {
      images: uploadImages,
      quantity: +(formData.get("quantity") as string),
      volume: +(formData.get("volume") as string),
      price: +(formData.get("price") as string),
    };
    const body = {
      order_id: +(formData.get("order_id") as string),
      product_id: +(formData.get("product_id") as string),
      rating: +(formData.get("rating") as string),
      content: formData.get("content"),
      extra,
    };
    const res = await fetch(`${URL}/replies`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${formData.get("token")}`,
        "Content-Type": "application/json",
        "Client-Id": CLIENT_ID || "",
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    await patchOrder(formData.get("token") as string, body.order_id, data.item._id);
    // const result = await getAllOrders(formData.get("token") as string);
    // console.log("---------------------------");
    // console.log("result", result);
    // console.log("---------------------------");
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/**
 * PATCH /replies/{_id}
 */
export async function patchReview(state, formData: FormData) {
  try {
    const uploadFiles: File[] = formData.getAll("uploadImages") as File[];
    const uploadImages = await Promise.all(
      uploadFiles.map(async (item) => {
        if (item.size > 0) {
          const imageFormData = new FormData();
          imageFormData.append("attach", item);
          const imageRes = await uploadFile(imageFormData);
          return imageRes.item[0].path;
        }
      })
    );
    const extra = { images: uploadImages };
    const body = {
      user_id: formData.get("user_id"),
      user: formData.get("user"),
      product_id: formData.get("product_id"),
      rating: formData.get("rating"),
      content: formData.get("content"),
      extra,
    };
    const res = await fetch(`${URL}/replies`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${formData.get("token")}`,
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
  const productIDList: string[] = formData.getAll("product_id") as string[];
  const productQuantityList: string[] = formData.getAll("product_quantity") as string[];
  const productsPromise = productIDList.map(async (product_id: string, idx: number) => {
    return { _id: +product_id, quantity: +productQuantityList[idx] };
  });
  const products = await Promise.all(productsPromise);
  // console.log("products[0]", (await products[0])._id);
  const userData = await getUser(+(formData.get("user_id") as string));
  const user = {
    _id: formData.get("user_id"),
    name: userData.item.name,
  };
  try {
    const body = {
      user_id: formData.get("user_id"),
      user,
      products: products,
      review_id: formData.get("review_id") || 0,
      cost: { total: formData.get("total") || 0 },
      token: formData.get("token"),
    };
    // if (body.cost.total === 0) {
    //   const resolvedProducts = await Promise.all(products);
    //   body.cost.total = resolvedProducts.reduce((sum, item) => sum + item.price, 0);
    // }
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
export async function patchOrder(token: string, order_id: number, review_id: number) {
  // console.log("--------------------------");
  // console.log(token, order_id, review_id);
  // console.log("--------------------------");
  // const orderData = (await getOrder(token, order_id)).item;
  // console.log("--------------------------");
  // console.log(orderData);
  // console.log("--------------------------");
  // orderData.review_id = +review_id;
  // console.log("--------------------------");
  // console.log(orderData);
  // console.log("--------------------------");
  try {
    const res = await fetch(`${URL}/orders/${order_id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Client-Id": CLIENT_ID || "",
      },
      body: JSON.stringify({ review_id: review_id }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

/* 찜 관련 함수 */
/**
 * POST /bookmarks/product
 */
export async function postLike({ user_id, target_id, token }: { user_id: number; target_id: number; token: string }) {
  try {
    const body = {
      type: "product",
      user_id,
      target_id,
      token,
    };
    const res = await fetch(`${URL}/bookmarks/product`, {
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
 * DELETE /bookmarks/{_id}
 */
export async function deleteLike({ target_id, token }: { target_id: number; token: string }) {
  try {
    const res = await fetch(`${URL}/bookmarks/${target_id}`, {
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
export async function patchUser(state, formData: FormData) {
  const token = formData.get("token") as string;
  const id = formData.get("user_id") as string;
  const body = {
    type: "user",
    token,
    password: formData.get("newPassword"),
    address: formData.get("mainAddress"),
    extra: {
      address: {
        zipCode: formData.get("zipCode"),
        mainAddress: formData.get("mainAddress"),
        detailAddress: formData.get("detailAddress"),
      },
    },
  };
  try {
    const res = await fetch(`${URL}/users/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
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

/* 미리내 테스트 관련 함수 */
/**
 * POST /posts
 */
export async function postMirineTest(state, formData: FormData) {
  const answerList = formData.get("answer") as string;
  const answers = Array.from(answerList).map(Number);
  const productList = formData.get("product") as string;
  const products = Array.from(productList).map(Number);
  const body = {
    type: "post",
    user: formData.get("user"),
    extra: { answers, products },
    token: formData.get("token"),
  };
  try {
    const res = await fetch(`${URL}/posts`, {
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

/* 파일 관련 함수 */
/**
 * POST /files
 */
export async function uploadFile(formData: FormData) {
  const body = new FormData();
  const attachData = formData.getAll("attach") as File[];
  if (!attachData) return { ok: 0, message: "파일 없음" };
  attachData.forEach((file) => body.append("attach", file));

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

/* 테스트용 함수 */
export async function postTestUser(/*state, formData: FormData*/) {
  // 임시데이터
  const info = {
    type: "user",
    email: "aa@bbb.cc",
    password: "1111",
    name: "이름",
  };
  try {
    const res = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Client-Id": CLIENT_ID || "",
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("error 발생", error);
    return error;
  }
}

export async function uploadFileForDev(state, formData: FormData) {
  const body = new FormData();
  const attachData = formData.getAll("attach") as File[];
  if (!attachData) return { ok: 0, message: "파일 없음" };
  attachData.forEach((file) => body.append("attach", file));

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
