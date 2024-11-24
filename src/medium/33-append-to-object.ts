// オブジェクトに新たにキーとバリューを追加する型

type AppendToObject<T extends {}, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};

type object33_1 = {
  key: "cat";
  value: "green";
};

type object33_2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type object33_3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type Test33_1 = AppendToObject<object33_1, "home", boolean>;
type Test33_2 = AppendToObject<object33_2, "home", 1>;
type Test33_3 = AppendToObject<object33_3, "moon", false | undefined>;


// 処理の流れ

// 1. AppendToObject<T extends {}, U extends string, V> 
// Tにオブジェクト、Uにstring型の制約を設ける

// 2. [K in keyof T | U]
// KにTのkeyと新たに追加するkeyのユニオン型を入れる
// ex) Test33_1 の場合
// keyof T | U -> "key" | "value" | "home"

// 3. K extends keyof T ? T[K] : V;
// Kはユニオン型なので順番に処理を実行する
// -> KがTの既存のkeyであればT[K]として、インデックスアクセス型を利用して、プロパティを作成
// -> 既存のkeyではなければ、新たな値であるVを追加する