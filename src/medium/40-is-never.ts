// never型を判定する型の実装

type IsNever<T> = [T] extends [never] ? true : false;

type Test40_1 = IsNever<never>; // true
type Test40_2 = IsNever<never | string>; // false
type Test40_3 = IsNever<undefined>; // false
type Test40_4 = IsNever<null>; // false
type Test40_5 = IsNever<"">; // false
type Test40_6 = IsNever<[]>; // false



// 学び

// タプルで囲むことによって起こること
// -> 条件分岐の分配法則を抑制する。
type Distribute<T> = T extends string ? true : false;
type Result40_1 = Distribute<string | number>; // boolean

type NonDistribute<T> = [T] extends [string] ? true : false;
type Result40_2 = NonDistribute<string | number>; // false

// -> 型全体を1つの単位として捉える


// neverは特殊な型
// 1.空の型集合を表す
// 2.どんな型とも互換性がない
// 3.条件型内で特殊な挙動をする
type IsNever1<T> = T extends never ? true : false;
type Result40_3 = IsNever1<never>; // neverが返される(期待したtrueではない)

type IsNever2<T> = [T] extends [never] ? true : false;
type Result40_4 = IsNever2<never>;  // true（期待通りの結果）
