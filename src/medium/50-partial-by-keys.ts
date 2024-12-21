// 指定したプロパティをオプションプロパティに変更する型の実装

type IntersactionToObj<T> = {
  [K in keyof T]: T[K];
};

type PartialByKeys<T, K extends keyof T = keyof T> = IntersactionToObj<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in Exclude<keyof T, K>]: T[P];
  }
>;

interface User50 {
  name: string;
  age: number;
  address: string;
}

type Test50_1 = PartialByKeys<User, "name">; // { name?: string | undefined; age: number; email: string; }
type Test50_2 = PartialByKeys<User, "name" | "age">; // { name?: string | undefined; age?: number | undefined; email: string; }
type Test50_3 = PartialByKeys<User>; // { name?: string | undefined; age?: number | undefined; email?: string | undefined; }

// 学び
// そもそもPratial<T>とは？ -> https://typescriptbook.jp/reference/type-reuse/utility-types/partial
// オブジェクトの型Tのすべてのプロパティをオプションプロパティにするユーティリティ型
type Person50 = {
  surname: string;
  middleName?: string;
  givenName: string;
};
type PartialPerson50 = Partial<Person50>; // PartialPerson50をホバーして確認してみる

// なぜ下記のコードだとエラーが出るのか
type BadPartialByKeys<T, K extends keyof T = keyof T> = {
    [P in K]?: T[P]
} & {
    [P in keyof T as P extends K ? never : P]:T[P]
}

// 1. 交差型のままになっている
// 交差型をそのままにすると、型が曖昧になって扱いづらくなる。
// 1-1. キーが重複しエラーを起こす可能性がある
// 1-2. オブジェクト型として扱えない可能性がある
// -> 交差型は「オブジェクト型のように見える」ものの、TypeScriptでは内部的に「複数の型が組み合わさった状態」として保持される。
//    その結果、型推論やチェックが期待通りに作動しない可能性がある。
// これらを解消するために、交差型を明確なオブジェクト型に変更する必要がある。
// -> IntersactionToObj<T>で解決

// 2. Mapped Types内のユニオン型の扱い方に注意
// Mapped Typesは以下のようなものからキーを取得する
// オブジェクト型のキー（keyof で取得）, 文字列リテラルの型, 数値リテラルの型, シンボルリテラルの型
// 生の交差型との相性がよくない -> 重複した際に曖昧になるから
// -> [P in K] がよくない理由

// 明確なオブジェクト型にしても、キーの重複は防げなくない？
// -> 結論 : 重複を防ぐことはできない
// だけど...
// 型の矛盾を解消して、扱いやすくすることが目的
// 1. 交差型は複数の型を重ね合わせるもの。
//    同じキーに対して異なる定義がされている場合、結果が曖昧になる。
// 2. 型を展開して見やすくする。
// 3, 型推論を改善する

// MyReadonly2が同じようなコードでOKな理由
//  -> readonlyはプロパティが存在することが前提。
// しかし、オプショナルの場合は、「あるかもしれなし、ないかもしれない」という曖昧さが交差型内で矛盾を引き起こす

// 復習
// Exclude<T, U> -> https://typescriptbook.jp/reference/type-reuse/utility-types/exclude
// Tにはユニオン型が入る
