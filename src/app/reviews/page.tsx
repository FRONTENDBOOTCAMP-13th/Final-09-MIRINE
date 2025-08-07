import ReviewCommon from "@/components/Review/ReviewCommon";
import Container from "@/components/ui/Container";
// import List from "@/components/Review/List/List";
// import Photo from "@/components/Review/Photo/Photo";
// import View from "@/components/Review/View/View";
import { getAllReivews } from "@/lib/function";
import styles from "./page.module.css";

export default async function Reviews() {
  const data = (await getAllReivews()).item;
  console.log("data", data);
  return (
    <>
      <Container>
        <div className={styles.layout}>
          <h2 className={styles.header}>리뷰</h2>
          <ReviewCommon data={data} />
          {/* <List />
					<Photo />
					<View /> */}
        </div>
      </Container>
    </>
  );
}
