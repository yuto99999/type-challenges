// 受け取った文字列の先頭の空白を削除した新しい文字列を返す

type Space = " " | "\n" | "\t";
type TrimLeft<S extends string> = S extends `${Space}${infer R}`
  ? TrimLeft<R>
  : S;

type Test24_1 = TrimLeft<" str">; // "str"
type Test24_2 = TrimLeft<"   str">; // "str"
type Test24_3 = TrimLeft<"   str   ">; // "str   "
type Test24_4 = TrimLeft<"   \n\t foo bar ">; // "foo bar "
type Test24_5 = TrimLeft<" ">; // ""


// 学び
// " " : スペース
// "\n" : 改行
// "\t" : タブ

// テンプレートリテラル型
// ``で囲んで、改行と式の挿入ができる
// 今回の`${Space}`