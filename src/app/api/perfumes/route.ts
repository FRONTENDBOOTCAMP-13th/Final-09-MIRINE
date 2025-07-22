import { NextRequest, NextResponse } from "next/server";

const URL = process.env.OPEN_MARKET_URL;
const CLIENT_ID = process.env.CLIENT_ID;

export async function GET(req: NextRequest) {
  console.log("GET 라우트 핸들러");

  const res = await fetch(`${URL}/users`, {
    headers: {
      "client-Id": CLIENT_ID ?? "",
    },
  });

  const data = await res.json();
  console.log("req", req);
  console.log("res", res);
  console.log("data", data);
  return NextResponse.json(data);
}
