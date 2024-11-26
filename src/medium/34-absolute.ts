// 数値型を絶対値に変換する型の実装

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}`
  ? U
  : `${T}`;


type Test34_1 = Absolute<0> // 0
type Test34_2 = Absolute<"-123"> //123
type Test34_3 = Absolute<9_999n> // 9999


// 学び

// テンプレートリテラル型の性質
// -> 型レベルで値を文字列を展開する
type TemplateLiteral34 = `${123}` // "123" (number -> string)

// bigint型(長整数型)
// number型よりも大きな整数を扱えるプリミティブ型
// 整数尾の末尾にnをつける

// bigint型とnumber型の計算は一緒にできない
// -> どちらかに型を合わせる必要がある。
// -> number型が少数部を持っていない限り、より表現幅の広いbigint型に合わせるのが無難。
// 2n + BigInt(3)
