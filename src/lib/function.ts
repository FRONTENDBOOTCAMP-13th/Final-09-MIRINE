"use server";
const URL = process.env.OPEN_MARKET_URL;
const CLIENT_ID = process.env.CLIENT_ID;

/* 향수 관련 함수 */
/**
 * GET /products
 * @description 제품 전체를 DB에서 가져오는 함수
 * @returns 제품 전체 데이터를 결과로 가지는 Promise
 */
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

/**
 * GET /products/{_id}
 * @description 제품 한 개를 DB에서 가져오는 함수
 * @param {number} id 제품의 _id
 * @returns 제품 한 개 데이터를 결과로 가지는 Promise
 */
export async function getProduct(id: number) {
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
/**
 * GET /replies/all
 * @description 리뷰 전체를 DB에서 가져오는 함수
 * @returns 리뷰 전체 데이터를 결과로 가지는 Promise
 */
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

/**
 * GET /replies
 * @description 로그인 한 사용자의 리뷰를 DB에서 가져오는 함수
 * @param {string} token 로그인 한 사용자에게 부여되는 Access Token
 * @returns 로그인 한 사용자의 리뷰 데이터를 결과로 가지는 Promise
 */
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

/**
 * GET /replies/{_id}
 * @description 리뷰 한 개를 DB에서 가져오는 함수
 * @param {id} id 리뷰의 _id
 * @returns 리뷰 한 개 데이터를 결과로 가지는 Promise
 */
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

/**
 * GET /replies/products/${_id}
 * @description 제품의 리뷰를 DB에서 가져오는 함수
 * @param {number} id 제품의 _id
 * @returns 제품의 리뷰 데이터를 결과로 가지는 Promise
 */
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
/**
 * GET /orders
 * @description 로그인 한 사용자의 구매 내역을 DB에서 가져오는 함수
 * @param {string} token 로그인 한 사용자에게 부여되는 Access Token
 * @returns 로그인 한 사용자의 구매 내역 데이터를 결과로 가지는 Promise
 */
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
/**
 * GET /bookmarks/product
 * @description 로그인 한 사용자의 찜 목록을 DB에서 가져오는 함수
 * @param {string} token 로그인 한 사용자에게 부여되는 Access Token
 * @returns 로그인 한 사용자의 찜 목록 데이터를 결과로 가지는 Promise
 */
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

export async function getUsersLikes(id: number) {
  try {
    const res = await fetch(`${URL}/users/${id}/bookmarks`, {
      headers: {
        "Client-Id": CLIENT_ID ?? "",
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
/**
 * GET /users
 * @description 사용자 전체를 DB에서 가져오는 함수
 * @returns 사용자 전체 데이터를 결과로 가지는 Promise
 */
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

/**
 * GET /users/{_id}
 * @description 사용자 전체를 DB에서 가져오는 함수
 * @param {number} id 사용자의 _id
 * @returns 사용자 전체 데이터를 결과로 가지는 Promise
 */
export async function getUser(id: number) {
  try {
    const res = await fetch(`${URL}/users/${id}`, {
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
/**
 * GET /posts
 * @description 미리내 테스트 전체를 DB에서 가져오는 함수
 * @returns 미리내 테스트 전체 데이터를 결과로 가지는 Promise
 */
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

/**
 * GET /posts/users
 * @description 로그인 한 사용자의 미리내 테스트를 DB에서 가져오는 함수
 * @param {string} token 로그인 한 사용자에게 부여되는 Access Token
 * @returns 로그인 한 사용자의 미리내 테스트 데이터를 결과로 가지는 Promise
 */
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
