// インデックスシグネチャを除外する型の実装

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K ? never : K extends P ? K : never]: T[K];
};

type Foo43 = {
  [key: string]: any;
  foo(): void;
};

type Bar43 = {
  [key: number]: any;
  bar(): void;
  0: string;
};

type Baz43 = {
  bar(): void;
  baz: string;
};

type Test43_1 = RemoveIndexSignature<Foo43>; // { foo(): void }
type Test43_2 = RemoveIndexSignature<Bar43>; // { bar(): void, 0: string }
type Test43_3 = RemoveIndexSignature<Baz43>; // { bar(): void, baz: string }

// 学び

// インデックスシグネチャ
// 型に「すべてのキー」を許容するルールを追加するもの。
// { [key: string]: any }; のようなもの。
// -> どんな文字列のkeyでもOK
// 明示的なkeyではない！
// インデックスシグネチャの型指定にはstring, number, symbolが使われる。

// PropertyKey = string | number | symbol

// P extends K ? never : ...
// ここでインデックスシグネチャを除外している。
// -> P = string | number | symbol となっていて、インデックスシグネチャではこの3つのどれかが型指定されているから。
// ここでのポイント
// インデックスシグネチャと明示的なkeyは別物
// { [key:string]: any } と{ foo: string }　は別物である。
// keyof演算子を使う、string | "foo" になる。

// K in keyof T as 条件式
// asを使って、条件式の結果をもとに、Kを再定義している


// 復習
// extendsってどんな仕組みだっけ？
// 「A extends B」とは、「型 A が型 B の 部分型（または同じ型）であるか」を確認する
// a = string | number, b = string
// a extends b ? true : false
// -> string | number は stringの部分型？
// -> stringの範囲を超えているのでfalse

// b extends a ? true : false
// b（string）が a（string | number）の部分型か？
// -> string は string | number に完全に含まれるのでtrue

// A < B ならtrue


