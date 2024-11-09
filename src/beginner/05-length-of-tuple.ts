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


// 学び
// T["length"] -> 配列の要素を取得する -> https://mosya.dev/blog/tc-tuple-length
tesla["length"]; // expected 4


// 復習
// typeof演算子とは
// -> 変数に対して機能する
const Tokyo = {
  city: "shinzyuku",
  population: 1000,
};
type CheckTokyo = typeof Tokyo; // <- {city: string; population: number;}

// as constについて
// as constの有無による違いは何か
// ↓
// ないver
const NormalArr = ["Tokyo", "Osaka", "Nagoya"];
NormalArr; // NormalArr: string[] (<- string型の配列としか認識されていない)

// あるver
const SpecialArr = ["Tokyo", "Osaka", "Nagoya"] as const;
SpecialArr; // SpecialArr: readonly ["Tokyo", "Osaka", "Nagoya"]

// おまけ(T[number])
type V = (typeof SpecialArr)[number]; // type V = "Tokyo" | "Osaka" | "Nagoya"
// 全てのインデックスの要素の型を、ユニオン型で返してくれる
