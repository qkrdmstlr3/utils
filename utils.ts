// 배열에 없는 요소라면 넣어주고 있는 요소라면 빼주는 함수
export const inOrOut = (a: string[], it: string) => (a.find((i) => i === it) ? a.filter((i) => i !== it) : [it, ...a]);

// 중첩 객체를 flat하게 펴주는 함수(key값이 중복되는 경우는 고려하지 않음)
export const flatObj = <T>(obj: {}): T =>
  Object.entries(obj).reduce(
    (a, [k, v]) => ({ ...a, ...(typeof v === 'object' ? flatObj(v) : { [k]: v }) }),
    {}
  ) as unknown as T;
