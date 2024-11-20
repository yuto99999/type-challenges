// 受け取った文字列の両端の空白を削除した新しい文字列を返す

type Trim<S extends string> = S extends
  | `${Space}${infer R}`
  | `${infer R}${Space}`
  ? Trim<R>
  : S;

type Test25_1 = Trim<" str">; // "str"
type Test25_2 = Trim<"   str">; // "str"
type Test25_3 = Trim<"   str   ">; // "str"
type Test25_4 = Trim<"str   ">; // "str"
type Test25_5 = Trim<"   \n\t foo bar ">; // "foo bar"
type Test25_6 = Trim<" ">; // ""

// 学び
// ユニオン型で書くことで、左右両方の空白につて処理できる