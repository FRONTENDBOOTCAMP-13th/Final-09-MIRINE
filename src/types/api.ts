// 데이터 검증 실패 시 개별 에러 메시지
export interface ServerValidationError {
  type: string;
  value: string;
  msg: string;
  location: string;
}

export type ServerValidationErrors<E> = Partial<Record<keyof E, ServerValidationError>>;

// 응답이 성공했을 때와 실패했을 때를 유니온으로 구성한 타입
export type ApiRes<T, E = never> = { ok: 1; item: T } | { ok: 0; message: string; errors?: ServerValidationErrors<E> };

// ApiRes를 갖는 Promise를 반환하는 타입
export type ApiResPromise<T> = Promise<ApiRes<T>>;
