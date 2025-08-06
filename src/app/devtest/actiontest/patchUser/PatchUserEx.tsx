"use client";

import { getUserID } from "@/lib/clientFunction";
import { getUser } from "@/lib/function";
import { useEffect, useState } from "react";
import ProfileInfoEx, { UserDataProp } from "./ProfileInfoEx";

export default function PatchUserEx() {
  const [userData, setUserData] = useState<UserDataProp | null>(null);
  useEffect(() => {
    (async () => {
      const res = await getUser(+getUserID());
      setUserData(res.item);
      console.log(res.item);
    })();
  }, []);
  return (
    <>
      <ProfileInfoEx userData={userData} />
    </>
  );
}
