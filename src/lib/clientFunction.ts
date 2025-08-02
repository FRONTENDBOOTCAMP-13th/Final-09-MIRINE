// "use client";
// const URL = process.env.OPEN_MARKET_URL;
// export function getFile(path: string) {
//   return `${URL}/${path}`;
// }
const URL = process.env.NEXT_PUBLIC_OPEN_MARKET_URL;
export function getFile(path: string) {
  return `${URL}/${path}`;
}

export function getAccessToken() {
  return localStorage.getItem("accessToken") || "";
}

export function getUserID() {
  return localStorage.getItem("userId") || "";
}

export function addPriceTemplate(price: number) {
  const priceStr = price.toString();
  let str = "";
  Array.from(priceStr).forEach((e, i) => {
    str += e;
    if (i !== priceStr.length - 1 && i % 3 === (priceStr.length - 1) % 3) str += ",";
  });

  return "￦" + str;
}

// 1234    0
// 12345   1
// 123456  2
// 1234567 03
