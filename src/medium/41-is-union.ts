// ユニオン型を判定する型の実装

type IsUnion<T, B = T> = [T] extends [never]
  ? false
  : T extends B
  ? [B] extends [T]
    ? false
    : true
  : never;

type Test41_1 = IsUnion<string>; // false
type Test41_2 = IsUnion<string | number>; // true
type Test41_3 = IsUnion<"a" | "b" | "c" | "d">; // true
type Test41_4 = IsUnion<undefined | null | void | "">; // true
type Test41_5 = IsUnion<{ a: string | number }>; // false
type Test41_6 = IsUnion<string | never>; // false
type Test41_7 = IsUnion<string | "a">; // false

// 処理の流れ

// 1.IsUnion<T, B = T>
// default valueでBにTの値を入れる

// 2.[T] extends [never]...
// Tがneverかどうかを判定。
// neverは特殊な型なので、配列でラップして判定する(40-is-never.ts 参照)。

// 3. [T] extends [never] ? false : T extends B...
// Tがneverの時、falseを返す。
// それ以外の時は、T extends B に移行し、ネストされた条件分岐へ進む。
// T extends B は常にtureを返す。

// 4. [B] extends [T]...
// 配列でラップされたもの同士の比較により分配を抑制する。
// ユニオン型の場合は、一致しないのでfalseの結果のtrueが返される。


// 復習
// neverは特殊な型
// []でラップしないと、期待する挙動にならない。