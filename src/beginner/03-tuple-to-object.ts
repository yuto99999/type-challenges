// Tuple型からObject型を生成するTupleToObjectを実装してください。

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [V in T[number]]: V;
};

type result = TupleToObject<typeof tuple>;
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}



// 学び

// そもそもタプルとは
// ->特定の型と順序を持つ要素の集まり。配列とは異なり、各要素の型を個別に指定できる。
const response: [number, string] = [200, "success"];

// constアサーション 「as const」 -> https://typescriptbook.jp/reference/values-types-variables/const-assertion
// readonlyのタプル型で取得。
const color = ["red", "blue", "green", "yellow", "purple"] as const;
// -> readnly ["red" | "blue" | "green" | "yellow" | "purple"]

// typeofは変数に対して、keyofは型に対して使用可能。
// typeof
const person = {
  name: "Yuto",
  age: 21,
};

type ChibaPerson = typeof person; // ChibaPerson = { name: string, age: number };

// keyof
type person = {
  name: string;
  age: number;
};

type TokyoPerson = keyof person; // TokyoPerson = "name" | "age"

// [number]は全てのインデックスの要素の型をユニオン型で取得。
// T[0] -> T[1] -> T[2] -> ...の順番で取得

// 5行目の > T extends readonly (string | number | symbol)[]について
// 読み取り専用の string or number or symbol型の配列に制約
// readonlyをつける理由 -> as constがreadonlyのタプル型を返すから。
