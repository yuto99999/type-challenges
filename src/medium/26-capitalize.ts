// 文字列の先頭を大文字に変換する

type MyCapitalize<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S;

type Test26_1 = MyCapitalize<"a">; // "A"
type Test26_2 = MyCapitalize<"hello world">; // "Hello world"
type Test26_3 = MyCapitalize<"yuto">; // "Yuto"
type Test26_4 = MyCapitalize<"">; // ""


// 学び
// Uppercase<T> -> https://mosya.dev/blog/tc-capitalize
// 与えられた文字列を大文字に変換する
const str26 = "hello";
type UpperStr26 = Uppercase<typeof str26>; // HELLO

// toUpperCase() -> https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase


// 復習
// テンプレートリテラル型
// -> 文字列リテラルを使って型を作成することができる機能、型を組み合わせて新しい文字列を作成できる
type Foo26<Name extends string> = `${Name}! Good morning!`;
type Foo26_1 = Foo26<"Yuto">; // "Yuto! Good morning!"
