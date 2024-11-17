// チェイナブルなオブジェクトに型をつける
// -> option と get の2つのプロパティを持つオブジェクト型のこと
// option(key, value) と get() の2つの関数を提供する型を定義

type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ) => Chainable<T & Record<K, V>>;
  get: () => T;
};

declare const config: Chainable;

const result19 = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

type Test_19 = typeof result19; // ↓ Result

interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}



// 処理の流れ

// 1.T = {}
// Tにdefault valueを与える

// 2.K extends string
// optionのkeyにはstring型以外の値が来ないように制約をかける

// 3.key : K extends keyof T ? never : K
// keyが重複しないよう条件分岐

// 4.Chainable<T & Record<K, V>>
// Record<K. V> で T を更新する

// 5. get: () => T
// 最終的な結果Tを戻り値として返す


// 学び

// Record<K, V> -> https://typescriptbook.jp/reference/type-reuse/utility-types/record
// 新しいキー(K)とその値の型(V)を作成する
type Record19 = Record<'foo' | 'bar', number>; // { foo: number; bar: number; }
