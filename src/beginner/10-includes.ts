// Array.includeの自作

type Includes<T extends readonly any[], U> = {
  [P in T[number]]: true;
}[U] extends true
  ? true
  : false;

type IncludesTest = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">; // true
type IncludesTest2 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // fasle
type IncludesTest3 = Includes<[1, 2, 3, 5, 6, 7], 7>; // true
type IncludesTest4 = Includes<[1, 2, 3, 5, 6, 7], 4>; // false
type IncludesTest5 = Includes<[{}], { a: "A" }>; // false
type IncludesTest6 = Includes<[boolean, 2, 3, 5, 6, 7], false>; //false
type IncludesTest7 = Includes<[true, 2, 3, 5, 6, 7], boolean>; // false
type IncludesTest8 = Includes<[{ a: "A" }], { readonly a: "A" }>; // false
type IncludesTest9 = Includes<[1], 1 | 2>; // false
type IncludesTest10 = Includes<[1 | 2], 1>; // true
type IncludesTest11 = Includes<[null], undefined>; //false

// 処理に流れ

// 学び

// インデックスアクセス型
// 2つの表記法がある
// 1.オブジェクト型["プロパティ名"]
type IPerson = { name: string; age: number };
type IP = IPerson["name" | "age"]; // type IP = string | number

// 2.配列型[number]


//復習
// keyof演算子
// -> オブジェクトの全てのプロパティをユニオン型で返す
type IFoo = { a: number; b: string; c: boolean };
type IF = IFoo[keyof IFoo];
