// 2つのオブジェクト型をマージする型の実装
// 2つ目に指定した型のキーは、1つ目の型のキーを上書

type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Test36 = Merge<foo, coo>;

// type Test36 = {
//     name: string;
//     age: number;
//     sex: string;
// }


// 学び
// ユニオン型にすることで一気に判定できる

// 復習
// ユニオン型は重複を排除する
