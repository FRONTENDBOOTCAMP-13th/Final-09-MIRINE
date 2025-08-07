import ReviewCommon from "@/components/Review/ReviewCommon";
// import List from "@/components/Review/List/List";
// import Photo from "@/components/Review/Photo/Photo";
// import View from "@/components/Review/View/View";
import { getAllReivews } from "@/lib/function";

export default async function Reviews() {
  const data = (await getAllReivews()).item;
  console.log("data", data);
  return (
    <>
      <ReviewCommon data={data} />
      {/* <List />
      <Photo />
      <View /> */}
    </>
  );
}
