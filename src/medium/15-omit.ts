// Omit<T, K>の実装

type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type test15_1 = MyOmit<Todo, "description">;
type test15_2 = MyOmit<Todo, "description" | "completed">;
type test15_3 = MyOmit<Todo1, "description" | "completed">;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}


// 学び

// Mapped Typesにおけるasは型アサーションとは違うらしい！(2024/12/18)
// 型アサーション「as」(type assertion) -> https://typescriptbook.jp/reference/values-types-variables/type-assertion-as
// -> 型推論を上書きする機能
// -> コンパイラに「俺の方が正しいよ！」とい意志表示
// 書き方が2つある
// 1.as構文
const omitValue1: string | number = "this is a string";
const strLength1: number = (omitValue1 as string).length;
// 2.アングルブラケット構文(angle-bracket syntax)
const omitValue2: string | number = "this is a string";
const strLength2: number = (<string>omitValue2).length;


// 復習

// Mapped Types
// {[key in X] : Y}が基本の型
// 型の各プロパティを順番に処理
// keyofと組み合わせて使う事あり

// keyof演算子
// オブジェクトの型からプロパティ名を返す。複数あるとプロパティ名をユニオン型で返す。
// プロパティを持たないオブジェクトの型にkeyofを使うとnever型が返る
