interface Book {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type MyReadonly<T> = { readonly [key in keyof T]: T[key] };

const book: MyReadonly<Book> = {
  title: "Hey",
  description: "foobar",
  completed: true,
  meta: {
    author: "John",
  },
};

// 学び

// <T>(ジェネリクス)とは？
// 型をパラメータとして受け取る -> 新しい型を生成
// 型の再利用性を上げる
type Foo<T> = {
  bar: T;
};
type FooString = Foo<string>;
type FooNumber = Foo<number>;

// インデックスアクセス型
interface Country {
  name: string;
  population: number;
}
type Name = Country["name"]; //string

// readonly修飾子
// プロパティを読み取り専用にする -> 再割り当て(上書き)ができない
interface Country1 {
  readonly name: string;
  population: number;
}

const country1: Country1 = {
  name: "Japan",
  population: 100000000,
};
// country1.name = "USA" -> error出る(readonlyによって読み取り専用プロパティだから)
country1.population = 100; // ->error出ない
