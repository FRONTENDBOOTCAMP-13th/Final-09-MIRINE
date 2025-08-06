import { getAllPerfumes } from "@/lib/function";
import { PerfumeInfo } from "./PerfumeEx";
import PerfumeList from "./PerfumeList";

export default async function LikeTest() {
  const data: { ok: number; item: PerfumeInfo[] } = await getAllPerfumes();

  return (
    <PerfumeList data={data} />
    // <ul>
    //   <PerfumeEx item={perfumeList[0]} />
    //   <PerfumeEx item={perfumeList[1]} />
    //   <PerfumeEx item={perfumeList[2]} />
    //   <PerfumeEx item={perfumeList[3]} />
    //   <PerfumeEx item={perfumeList[4]} />
    //   <PerfumeEx item={perfumeList[5]} />
    // </ul>
  );
}
