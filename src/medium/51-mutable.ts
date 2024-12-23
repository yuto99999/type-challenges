// Tの全てのプロパティをミュータブルに変更する（= readonlyの除去）

type Mutable<T extends object> = { -readonly [K in keyof T]: T[K] };

interface Todo51 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type List51 = [1, 2, 3];

type Test51_1 = Mutable<Readonly<Todo51>>;
type Test51_2 = Mutable<Readonly<List51>>;

// 学び
// - をつけることで、修飾子を削除することができる

// object型とは
// -> 基本的にはプリミティブ型以外の値のことを指す
