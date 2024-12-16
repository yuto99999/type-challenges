// ReturnType<T>の実装

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type ComplexObject = {
  a: [12, "foo"];
  bar: "hello";
  prev(): number;
};

const fn = (v: boolean) => (v ? 1 : 2);
const fn1 = (v: boolean, w: any) => (v ? 1 : 2);

type test14_1 = MyReturnType<() => string>; // string
type test14_2 = MyReturnType<() => 123>; // 123
type test14_3 = MyReturnType<() => ComplexObject>; // ComplexObject
type test14_4 = MyReturnType<() => Promise<boolean>>; // Promise<boolean>
type test14_5 = MyReturnType<() => () => "foo">; // () => "foo"
type test14_6 = MyReturnType<() => typeof fn>; // 1 | 2
type test14_7 = MyReturnType<() => typeof fn1>; // 1 | 2

// 学び

// ReturnType<T>とは
// -> 関数型Tの戻り値を取得するユーティリティ型
// typeofと併用して実際の関数の戻り値を取得する場合が多い
// 引数Tには関数の型を渡す

// 復習
// typeof演算子
const value14 = 14;
type Value14 = typeof value14; // number

const fn2 = (v: boolean) => {
  if (v) return 1;
  else return 2;
};
type a = typeof fn2; // (v: boolean) => 1 | 2
