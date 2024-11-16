// 2つの型引数TとKを取るMyReadonly2<T, K>を実装
// Kが指定されている場合は、Tの中のKのプロパティを読み取り専用にする。
// Kが指定されていない場合はTの中の全てのプロパティを読み取り専用にする。

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};

interface Todo16_1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

type test16_1 = MyReadonly2<Todo1>; //Readonly<Todo1>
type test16_2 = MyReadonly2<Todo1, "title" | "description">; // Expected
type test16_3 = MyReadonly2<Todo2, "title" | "description">; // Expected

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}

// 処理の流れ

// 1.K extend keyof T で引数Kに制約をつける( -> Tのプロパティのみ受け付ける)
// 2.K extend keyof T = keyof T とすることでdefalut valueを設定する
// -> T全体をReadonlyにしたい場合に、引数Kを指定しなくてもエラーが出ない
// 3.読み取り専用にするプロパティのみの塊を作る( -> readonly [P in K]: T[P])
// 4.読み取り専用にしないプロパティを作る( -> [P in keyof T as P extends K ? never : P]: T[P])
// 5.&(インターセクション型)で型を結合する


// 学び

// default value -> https://typescriptbook.jp/reference/functions/default-parameters
// 引数の右に = とデフォルト値を書く
// JavaScriptは引数を省略するとundefinedを返す
// -> default value は引数を省略した時に、代わりに代入される
function foo_16(x = 1) {
  console.log(x);
}
foo_16(); // 1

// &(インターセクション型 (intersection type)) -> https://typescriptbook.jp/reference/values-types-variables/intersection
// ユニオン型とは相対するもの( -> &はandのイメージ)
// 合成したいオブジェクトを&を使って列挙することでインターセクション型ができる
type A_16 = { name: string };
type B_16 = { age: number };
type C_16 = A_16 & B_16; // {name : string, age : number}

const Person_16: C_16 = {
  name: "Yuto",
  age: 21,
};


// 復習

// as(型アサーション)
// 型推論を上書きする


// 参考記事
// https://github.com/type-challenges/type-challenges/issues/1721
