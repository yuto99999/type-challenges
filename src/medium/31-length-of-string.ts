// 文字列の長さを計算する型の実装

type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...T, F]>
  : T["length"];

type Test31_1 = LengthOfString<"">; // 0
type Test31_2 = LengthOfString<"Hello">; // 5
type Test31_3 = LengthOfString<"TypeScript is awsome">; // 20


// 学び

// なぜ `${infer F}${infer R}` のFには最初の1文字が抽出されるのか。
// ↓
// テンプレートリテラル型のパターンマッチングについて
// テンプレートリテラルを2つに分割する場合、tsは最小マッチングの原則に従う。
// -> 最初の${infer F}には、可能な限り小さい(短い)マッチングが行われる。

// `${infer F}${infer R}`
// ↓ 内部的には以下のような優先順位で評価される
// 1. Fに最初の1文字を割り当て
// 2. 残りすべてをRに割り当て
