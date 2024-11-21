// 文字列Sに含まれているFromをToに全て置き換える型を実装

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;


// 学び
// 再帰させる場所のパターンはいくらでもある
// 今回は左から順に置き換えてくイメージ