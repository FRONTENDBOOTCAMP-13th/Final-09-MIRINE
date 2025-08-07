import MirineTest from "@/components/MinineTest/TestPage/MirineTest";

export interface Problem {
  question: string[];
  answer: string[];
}
export default function TestPage() {
  const problems: Problem[] = [
    {
      question: ["여행을 가게 된 당신!", "도착한 여행지에서 나는 향기는 무엇인가요?"],
      answer: ["산토리니의 받사가 향기", "인도여행! 풀, 나무, 인센스 향", "하와이의 꽃목걸이 망고, 코코넛, 딸기 향", "101층 호텔에서 야경을 바라보며..가죽, 와인향"],
    },
    {
      question: ["다음 중 가장 끌리는 향은 무엇인가요?", "(달콤한 계열 중 골라주세요)"],
      answer: ["디저트의 달콤함", "사탕, 망고와 같은 상큼 없는 달콤함", "과일, 꽃의 상큼달달한 향", "달콤은 빼주세요"],
    },
    {
      question: ["민초 찬성 파, 반대 파", "여러분은 어떤파인가요?"],
      answer: ["가죽, 레더 좋아 파", "스파이시, 인센스, 패츌리 좋아 파", "곽티슈 향기, 화이트플로럴 좋아 파", "파우더리, 백화점 1층 향기 좋아 파"],
    },
    {
      question: ["다음 중 가장 마음에 드는 단어 조합을 골라주세요!"],
      answer: ["깨끗한, 깔끔한, 세제, 이불", "귀여운, 상큼한, 달달한", "편안한, 아로마틱한, 풀향의", "관능적인, 섹시한, 예술적인"],
    },
    {
      question: ["다음 중 가장 끌리는 향은 무엇인가요?"],
      answer: ["한 가지 꽃 향기", "여러 꽃이 가득한 부케 향기", "꽃은 싫다! 풀, 나무 향기가 좋다!", "풀, 꽃의 향이 아닌 다른 향 (ex. 차향, 비누향)"],
    },
  ];

  return (
    <>
      <MirineTest problems={problems} />
    </>
  );
}
