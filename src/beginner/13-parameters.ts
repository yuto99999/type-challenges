// 組み込みの型ユーティリティParameters<T>を使用せず、Tから配列を構築する型を実装

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer Arg
) => any
  ? Arg
  : never;

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: "A" }): void {}
function baz(): void {}

type ParametersTest = MyParameters<typeof foo>; // [string, number]
type ParametersTest2 = MyParameters<typeof bar>; // [boolean, { a: 'A' }]
type ParametersTest3 = MyParameters<typeof baz>; // []

// 学び

// そもそもユーティリティ型(utility type)とは -> https://typescriptbook.jp/reference/type-reuse/utility-types
// 型から別の型を導き出してくれる型
// Readonly<T>, Pick<T,U>, Omit<T,U>, Awaited<T>など

// Parameters<T>とは -> https://qiita.com/k-penguin-sato/items/e2791d7a57e96f6144e5
// -> 関数型Tの引数の型をタプル型として抽出した型を構築

// コールバック関数 -> https://typescriptbook.jp/reference/functions/callback-functions
// 関数の引数として渡される関数

// 関数の型宣言 -> https://typescriptbook.jp/reference/functions/function-type-declaration
// コールバック関数の型は (arg: [引数の型]) => [戻り値の型]

// 残余引数(可変長引数) -> https://typescriptbook.jp/reference/functions/rest-parameters
// -> 引数の個数が決まっていない引数
// 引数の前に ... を記述する
function func(...params: any[]) {
  console.log(params);
}
func(1, 2, 3); // [1, 2, 3]

// スプレッド構文との違い
// -> 残余引数は関数定義側の機能で、スプレッド構文は関数呼び出し側の機能
