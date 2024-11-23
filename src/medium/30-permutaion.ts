// Union型をUnion型の値の順列を含む配列に変換する順列型の実装

type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;

type Test30_1 = Permutation<"a" | "b">; // ["a", "b"] | ["b", "a"]
type Test30_2 = Permutation<"a" | "b" | "c">; // ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"] | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
type Test30_3 = Permutation<never>; // []
type Test30_4 = Permutation<boolean>; // [false, true] | [true, false]



// 処理の流れ

// 1.引数にTとKを持たせ、KにデフォルトバリューでTの値を入れる
// -> 再帰させる際に、全ての要素に対して順列を生成をする必要があるから

// 2. [T] extends [never] ? [] : ...
// Tがneverの時にからの配列を返す

// 3. K extends K ? ...
// Kにはユニオン型が入るので、分配法則で個別に処理される

// 4.[K, ...Permutation<Exclude<T, K>>] : never
// ExcludeでTからKを除いた要素で再帰的な処理を行う
// neverが返されるまで順列を作成

// T = "a" | "b" の場合
// type Test30_1 = Permutation<"a" | "b">; // ["a", "b"] | ["b", "a"]
// 0. T = "a" | "b", K = "a" | "b"

// 1. [T] -> ["a" | "b"] -> neverではないので次のステップへ

// 2. K = "a" | "b"
// K = "a"の場合
// ["a", ...Permutation<Exclude<"a" | "b", "a">>]
// -> ["a", ...Permutation<"b">]
// --------------------------------------------------
// -> Permutation<"b">
// -> ["b", ...Permutation<Exclude<"b", "b">>]
// -> ["b", ...Permutation<Exclude<"b", "b">>]
// -> ["b", ...[]]
// -> ["b"]
// --------------------------------------------------
// -> ["a", "b"]

// 3. K = "b"の場合も同様の処理

// 4. type Test30_1 = ["a", "b"] | ["b", "a"]


// 学び

// なぜT extends never ではなく、[T] extends [never] で条件分岐するのか。
// -> Permutation型は、ユニオン型全体を1つの単位として評価したいから。
// ユニオン型は分配法則が起こるケースと起こらないケースがある。
// 起こるケース
// "a" | "b"
// 起こらないケース
// ["a" | "b"]
// -> 剥き出しかどうかが関係している。
// 今回、Tがneverかどうかを確認する際に、分配法則によって個別に評価されてしまうと、正確な順列が生成できない可能性がある。


// 復習
// booleanはtrueとfalseのユニオン型である
