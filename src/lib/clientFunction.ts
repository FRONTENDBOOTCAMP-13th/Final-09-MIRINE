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

export function addPhoneHyphens(phone: string) {
  let str = "";
  Array.from(phone).forEach((e, i) => {
    str += e;
    if (i === 2 || i === phone.length - 5) str += "-";
  });
  return str;
}
