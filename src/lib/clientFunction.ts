// "use client";
// const URL = process.env.OPEN_MARKET_URL;
// export function getFile(path: string) {
//   return `${URL}/${path}`;
// }
// const URL = process.env.NEXT_PUBLIC_OPEN_MARKET_URL;
export function getFile(path: string) {
  // return `${URL}/${path}`;
  return `${path}`;
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

export function addPhoneHyphens(phone: string) {
  let str = "";
  Array.from(phone).forEach((e, i) => {
    str += e;
    if (i === 2 || i === phone.length - 5) str += "-";
  });
  return str;
}
