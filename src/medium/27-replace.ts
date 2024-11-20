// 文字列Sに含まれているFromをToに一度だけ置き換える型を実装

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;

type Test27_1 = Replace<"types are fun!", "fun", "awsome">; // "types are awsome!"
type Test27_2 = Replace<"Good Morning!", "Morning", "Evening">; // "types Evening!"

// 学び
// 自分のコード(a)と解答のコード(b)の比較
// a
type Replace_a<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer L}${From extends "" ? never : From}${infer R}`
  ? `${L}${To}${R}`
  : S;

// b
type Replace_b<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;

// どちらが優れたコードか？
// -> 結論はb
// 1.Fromが空文字("")の場合の処理を明示している
// 2.条件分岐が明確、可読性が良い
// 3.空文字の場合の挙動が明確なので、型推論がより安全


// 復習
// inferによる推論

// テンプレートリテラル型の使用