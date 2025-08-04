import LikeListPage from "@/components/MypageAside/LikeList/LikeList";

export default function Wishlist() {
    const userID = 2; //임시 테스트용
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOjIsInR5cGUiOiJ1c2VyIiwibmFtZSI6Iuy5tOumrOuCmCIsImVtYWlsIjoia2FyaW5hQG1hcmtldC5jb20iLCJsb2dpblR5cGUiOiJlbWFpbCIsImlhdCI6MTc1NDI3MzEwOCwiZXhwIjoxNzU0MzU5NTA4LCJpc3MiOiJGRUJDIn0.rF2mR9hs-u_cUg8Sd-xQ5UjmBso33ZQ1RZjBltFGUUI"; 

  return (
    <>
      <LikeListPage userID={userID} token={token} />
    </>
  )
  ;
}
