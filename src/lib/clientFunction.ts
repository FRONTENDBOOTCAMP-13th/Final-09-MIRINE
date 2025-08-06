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
  if (typeof window !== "undefined") return localStorage.getItem("accessToken") || "";
  return "";
}

export function getUserID() {
  if (typeof window !== "undefined") return localStorage.getItem("userId") || "";
  return "";
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

export function sortLatest(a: { createdAt: string }, b: { createdAt: string }) {
  return b.createdAt.localeCompare(a.createdAt);
}
export function addHashTag(tag: string) {
  return "#" + tag;
}

export function averageRating(ratings: number[]) {
  console.log("length", ratings.length);
  if (ratings.length === 0) return "0.00";
  const sum = ratings.reduce((sum, e) => sum + e, 0);
  return (sum / ratings.length).toFixed(2);
}
export function addml(volume: number) {
  return volume + "ml";
}

export function productTotalPrice(cartList: { quantity: number; price: number }[]) {
  const sum = cartList.reduce((sum, e) => sum + e.quantity * e.price, 0);
  return sum;
}

export function seperateArray<T>(array: Array<T>, cnt: number) {
  const resultArray: Array<Array<T>> = [];
  const newArray = [...array];
  newArray.forEach((item, i) => {
    if (i % cnt === 0) resultArray.push([item]);
    else resultArray[resultArray.length - 1].push(item);
  });
  return resultArray;
}
