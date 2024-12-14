// 文字列から指定した文字を削除する型の実装

type DropChar<S, C extends string> = S extends `${infer F}${C}${infer R}`
  ? DropChar<`${F}${R}`, C>
  : S;

type Test45_1 = DropChar<"butter fly!", " ">; // "butterfly!"
type Test45_2 = DropChar<"butter fly!", "!">; // "butter fly"
type Test45_3 = DropChar<"    butter fly!        ", " ">; // "butterfly!"
type Test45_4 = DropChar<" b u t t e r f l y ! ", " ">; // "butterfly!"

// 学び
// inferについて理解を深める。
// テンプレートリテラル型で扱うinferは空文字になる場合にもなる。
// 今回の場合
// -> `${infer F}${C}${infer R}` のFの部分
// DropChar<"    butter fly!        ", " ">のように、
// 最初からCに該当する文字列が来たら、Fに入って削除できなくない？って思った。
// -> Fには何も入らず、空文字列となる（inferを使ってるRも同様）。
// F -> 何も無し = ""
// C -> " "
// R -> ' butter fly! '