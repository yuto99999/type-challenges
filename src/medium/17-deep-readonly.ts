// オブジェクトの全てのパラメーターを(再帰的に)読み取り専用にする

// answer1
// type DeepReadonly<T> = keyof T extends never
//   ? T
//   : {
//       readonly [K in keyof T]: DeepReadonly<T[K]>;
//     };

// answer2
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? T[K] extends Function
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K];
};

type DP = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type test17_1 = DeepReadonly<DP>;

// 処理の流れ

// 1. keyof DPを評価
// keyof DP = "x" | "y"
// -> プリミティブ型ではない
// -> else句({readonly [K in keyof T]: DeepReadonly<T[K]>;})の処理スタート

// 2. DeepReadonly<DP> = readonly [K in "x" | "y"] : DeepReadonly<DP[K]>の処理
// DeepReadonly<DP["x"]>について評価
// -> DeepReadonly<DP["x"]> = DeepReadonly<{a : 1, b : "hi"}>
// -> keyof {a : 1, b : "hi"} = "a" | "b"
// -> プリミティブ型ではない
// ->  readonly [K in "a" | "b"]: DeepReadonly<{ a: 1, b: 'hi' }[K]>

// 3.{ a: 1, b: 'hi' }[K]の評価
// K = a -> 1
// K = B -> "h1"
// -> プリミティブ型
// -> 条件分岐がtrueになる

// 4.DeepReadonly<DP["y"]>について評価
// -> DeepReadonly<DP["y"]> = DeepReadonly<"hey">
// -> プリミティブ型
// -> 条件分岐がtrueになる

// 5.全てにreadonlyが付与される

// 学び

// プリミティブ型で再起を終了させる
// -> keyof プリミティブ型はneverが返される
