// Pythonのany()関数に似た型レベルの関数を実装
// 型引数として配列を受け取る
// 配列の要素の中にtruthyな値が1つでもあればtrueを返す
// 配列が空の場合はfalseを返す

type AnyOf<T extends readonly any[]> = T[number] extends
  | 0
  | ""
  | false
  | []
  | { [key: string]: never }
  | undefined
  | null
  ? false
  : true;

type Test39_1 = AnyOf<[1, '', false, [], {}]> // true
type Test39_2 = AnyOf<[0, '', false, [], {}]> // false
type Test39_3 = AnyOf<[0, '', false, [], {}, undefined, null]> // false
type Test39_4 = AnyOf<[0, '', false, [], { name: 'test' }]> // true


// 学び

// falsyな値とは -> https://typescriptbook.jp/reference/values-types-variables/truthy-falsy-values
// ↓
// false (boolean型)
// 0, -0, NaN(Not a Number) (number型)
// "" (string型)
// null, undefined, 0n

// 上記の値以外は全部truthyな値として扱われる。


// {} と {[key:string] : never} の違いは？
// -> 微妙な違いがある。

// {} の場合
// オブジェクトとして有効 / プロパティを追加できる / truthyな値として扱われる

// {[key:string] : never} の場合
// どんなプロパティも持てない型 / プロパティの追加が完全に禁止される / 実質的に「空」と同等だが、より厳密な型
// 型システムにおいて、より厳密に「本当に空」であることを表現できる型表現である。
