import { NextRequest, NextResponse } from "next/server";

const URL = process.env.OPEN_MARKET_URL;
const CLIENT_ID = process.env.CLIENT_ID;

export async function GET(req: NextRequest) {
  console.log("GET 라우트 핸들러");

  const res = await fetch(`${URL}/posts`, {
    headers: {
      "client-Id": CLIENT_ID,
    },
  });

  const data = await res.json();
  console.log(req, res, data);
  return NextResponse.json(data);
}
