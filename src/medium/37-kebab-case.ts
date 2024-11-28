// キャメルケースもしくはパスカルケースの文字列を、ケバブケースに置換する型

type KebabCase<S extends string> = S extends `${infer S1}${infer S2}`
  ? S2 extends Uncapitalize<S2>
    ? `${Uncapitalize<S1>}${KebabCase<S2>}`
    : `${Uncapitalize<S1>}-${KebabCase<S2>}`
  : S;

type Test37_1 = KebabCase<"ABC"> // "a-b-c"
type Test37_2 = KebabCase<"FooBarBaz"> // "foo-bar-baz"
type Test37_3 = KebabCase<"Foo-Bar"> // "foo--bar"
type Test37_4 = KebabCase<""> // ""


// 学び
// S2 extends Uncapitalize<S2>
// 小文字かどうかを確かめたいなら、元の確かめたい部分と小文字に変換した部分を比較すれば良い。

// Uncapitalize<S> -> https://zenn.dev/uhyo/articles/typescript-intrinsic
// 受け取った文字列Sを小文字に変換する


// 復習
// Uppercase<S>
// 受け取った文字列Sを大文字に変換する