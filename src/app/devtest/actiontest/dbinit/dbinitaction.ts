"use server";
import fs, { readFileSync } from "node:fs";
const URL = process.env.OPEN_MARKET_URL;
const CLIENT_ID = process.env.CLIENT_ID;

export async function dbinit() {
  const body = new FormData();
  const initDataBuffer = fs.readFileSync("src/api/dbinit/team/data.json");
  const initDataBlob = new Blob([initDataBuffer], { type: "application/json" });
  body.append("initData", initDataBlob);
  const files = fs.readdirSync("src/api/dbinit/team/uploadFiles");
  files.forEach((file) => {
    const filePath = "src/api/dbinit/team/uploadFiles/" + file;
    const fileBuffer = readFileSync(filePath);
    const fileBlob = new Blob([fileBuffer]);
    body.append("attach", fileBlob, file);
  });
  const res = await fetch(`${URL}/db/init`, {
    method: "POST",
    headers: {
      "client-id": CLIENT_ID || "",
    },
    body: body,
  });
  const data = await res.json();
  console.log(data);
  if (data?.files?.missing?.details) console.log("missing", data.files.missing.details);
  if (data?.files?.unused?.details) console.log("unused", data.files.unused.details);
}
