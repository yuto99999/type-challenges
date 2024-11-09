// 配列の長さを返すLength<T>を実装してください。
type Length<T extends readonly any[]> = T["length"];

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type teslaLength = Length<typeof tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

// 発想
// 1. とりあえず配列に制限したいので、extends any[]を記述
// 2. teslaの配列がconstアサーションにより読み取り専用の配列になっているので、制約の中にreadonlyを追加
// 3. あとは要素の数を取得するだけ

// 学び -> https://mosya.dev/blog/tc-tuple-length

// T["length"] -> 配列の要素を取得する

// 復習
// typeof演算子とは
// -> 変数に対して機能する
const Tokyo = {
  city: "shinzyuku",
  population: 1000,
};
type CheckTokyo = typeof Tokyo; // <- {city: string; population: number;}
