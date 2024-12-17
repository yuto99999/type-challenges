// 引数に与えた数値から1を引いた数字を返す型

type Pop46<T extends any[]> = T extends [...infer Head, any] ? Head : never;

type MinusOne<T extends number, A extends any[] = []> = A["length"] extends T
  ? Pop46<A>["length"]
  : MinusOne<T, [...A, 0]>;

type Test46_1 = MinusOne<1>; // 0
type Test46_2 = MinusOne<100>; // 99



// 処理の流れ MinusOne<3>の場合
// 1. 初期状態 -> T = 3, A = []
// A["iength"] = 0
// 0 extends 3 -> false -> MinusOne<3, [0]>

// 2. 2巡目 -> T = 3, A = [0]
// A["length"] = 1
// 1 extends 3 -> false -> MinusOne<3, [0, 0]>

// 3. 3巡目 -> T = 3, A = [0, 0]
// A["length"] = 2
// 2 extends 3 -> false -> MinusOne<3, [0, 0, 0]>

// 4. 4巡目 -> T = 3, A = [0, 0, 0]
// A["length"] = 3
// 3 extends 3 -> true -> 再帰処理が終了
// -> Pop<[0, 0, 0]>["length"]
// -> [0, 0, 0] extends [...infer Head, any] ? Head : never
// -> Head
// -> [0, 0]（<= Pop<A>）
// Pop<A>["length"] -> 2



// 学び

// なぜT - 1で実装できないのか？
// tsの型システムでは直接的な数値演算ができない。
// -> tsの型システムは、「コンパイル時の型チェックの仕組み」であり、「計算する仕組み」ではない。
// 型システムは計算より分類に特化している

// ではどうするか？
// -> タプルの長さを数値の代わりに扱う

// [...infer Head, any] の ... は残余パターン
// 残余パターンは配列のどんな位置に置いても大丈夫！
// (-> 残余引数は最後の要素に置かなければならない)

// type Example1 = [1, 2, 3, 4] extends [...infer Start, any] ? Start : never;
// // Example1 = [1, 2, 3]

// type Example2 = [1, 2, 3, 4] extends [any, ...infer Middle, any] ? Middle : never;
// // Example2 = [2, 3]

// type Example3 = [1, 2, 3, 4] extends [any, ...infer Rest] ? Rest : never;
// // Example3 = [2, 3, 4]
