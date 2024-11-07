interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

//   type MyPick<T, K> = any;

type MyPick<T, K extends keyof T> = { [key in K]: T[key] };

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};



// 学び

// keyof演算子 -> https://typescriptbook.jp/reference/type-reuse/keyof-type-operator
// オブジェクト型からそのプロパティ名を型として取得する演算子
// オブジェクトのキーをユニオン型として返します
interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User; // ( -> "name" | "age" | "email")
type CheckUserKeys = UserKeys extends "name" | "age" | "email" ? true : false;

// Mapped Types -> https://typescriptbook.jp/reference/type-reuse/mapped-types
// {[key in X] : Y}が基本の型
// 型の各プロパティを順番に処理

// extends -> https://typescriptbook.jp/reference/generics/type-parameter-constraint
// 型の制約をつける
// Tは全てを許容しすぎてエラーが出るために、型の制約を行う。(ジェネリクス　-> https://typescriptbook.jp/reference/generics)
// T = X[]　（ー> Tが配列以外の型の可能性があるためエラー)


type title = Todo["title"]; // ( -> string)
