"use server";
const URL = process.env.OPEN_MARKET_URL;
const CLIENT_ID = process.env.CLIENT_ID;

/* 향수 관련 함수 */
export async function getAllPerfumes() {
  try {
    const res = await fetch(`${URL}/products`, {
      headers: {
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getPerfume(id: number) {
  try {
    const res = await fetch(`${URL}/products/${id}`, {
      headers: {
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/* 리뷰 관련 함수 */
export async function getAllReivews() {
  try {
    const res = await fetch(`${URL}/replies/all`, {
      headers: {
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getMyReivews(token: string) {
  try {
    const res = await fetch(`${URL}/replies`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getReivew(id: number) {
  try {
    const res = await fetch(`${URL}/replies/${id}`, {
      headers: {
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getProductsReivews(id: number) {
  try {
    const res = await fetch(`${URL}/replies/products/${id}`, {
      headers: {
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/* 주문 관련 함수 */
export async function getAllOrders(token: string) {
  try {
    const res = await fetch(`${URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/* 찜 관련 함수 */
export async function getAllLikes(token: string) {
  try {
    const res = await fetch(`${URL}/bookmarks/product`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/* 회원 관련 함수 */
export async function getAllUsers() {
  try {
    const res = await fetch(`${URL}/users`, {
      headers: {
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/* 미리내 테스트 관련 함수 */
export async function getAllMirineTests() {
  try {
    const res = await fetch(`${URL}/posts`, {
      headers: {
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getMyMirineTests(token: string) {
  try {
    const res = await fetch(`${URL}/posts/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "client-Id": CLIENT_ID ?? "",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

/* 파일 관련 함수 */
