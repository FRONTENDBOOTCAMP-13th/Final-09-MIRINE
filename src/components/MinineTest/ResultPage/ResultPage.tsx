import PerfumeResult from "@/components/MinineTest/ResultPage/PerfumeResult"
export default function ResultPage() {
  return (
    <div>
      <h1>당신의 향수는?</h1>

      {/* 테스트 결과 */}
      <ul>
        <PerfumeResult />
      </ul>

      <div>
        <button></button>
      </div>
    </div>
  )
}