// 文字列をから3つのキャプチャグループを取得し、[プラスまたはマイナス, 数値, 単位]を作る。キャプチャに失敗した場合は、""を返す。
// -> 正規表現に対応するパターンマッチングの考え方を文字列テンプレートリテラル型で再現

type PercentageParser<A extends string> = A extends `${infer F}${infer R}`
  ? F extends "+" | "-"
    ? R extends `${infer N}%`
      ? [F, N, "%"]
      : [F, R, ""]
    : A extends `${infer N}%`
    ? ["", N, "%"]
    : ["", A, ""]
  : ["", "", ""];

type Test44_1 = PercentageParser<"">; // ["", "", ""]
type Test44_2 = PercentageParser<"100">; // ["", "100", ""]
type Test44_3 = PercentageParser<"85%">; // ["", "85", "%"]
type Test44_4 = PercentageParser<"+90%">; // ["+", "90", "%"]
type Test44_5 = PercentageParser<"-95%">; // ["-", "95", "%"]
type Test44_6 = PercentageParser<"%">; // ["", "", "%"]


// 学び
// 正規表現とは　-> https://typescriptbook.jp/reference/builtin-api/regexp
// -> 文字列のパターンマッチングや、検索・置換を行うための表現方法。
// jsでは正規表現を①正規表現リテラル（/.../）or ②RegExpオブジェクトを使って定義する。

// ①正規表現リテラル（/.../）
// -> 正規表現を直接書くための構文。/で囲む。
// const pattern = /hello/; // "hello" という文字列にマッチする正規表現
// console.log(pattern.test("hello world")); // true
// console.log(pattern.test("hi there"));    // false

// ②RegExpオブジェクト
// 正規表現リテラルと同じ機能を持つが、RegExp コンストラクタを使って正規表現を作成。
// const pattern = new RegExp("hello"); // "hello" という文字列にマッチする正規表現
// console.log(pattern.test("hello world")); // true
// console.log(pattern.test("hi there"));    // false

// 動的パターンを作成したい場合に便利。
// const keyword = "hello";
// const patternLiteral = /hello/; // リテラル: パターン固定
// const patternDynamic = new RegExp(keyword); // RegExp: 動的に生成

// 主な使い方
// -> ①検索・②抽出・③置換
// ①検索
// testメソッド
// const pattern = /world/;
// console.log(pattern.test("hello world")); // true
// console.log(pattern.test("hi there!")) // false

// ②抽出
// execメソッド
// const pattern = /(\d+)-(\d+)/;
// const result = pattern.exec("2024-12-12");
// console.log(result); 
// ["2024-12-12", "2024", "12"] // マッチした部分とキャプチャグループ


// ③置換
// replaceメソッド
// const str = "apple banana orange";
// const newStr = str.replace(/banana/, "grape");
// console.log(newStr); // "apple grape orange"

