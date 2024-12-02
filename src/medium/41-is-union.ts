// ユニオン型を判定する型の実装

type IsUnion<T, B = T> = T extends B ? ([B] extends [T] ? false : true) : never;

type Test41_1 = IsUnion<string>; // false
type Test41_2 = IsUnion<string | number>; // true
type Test41_3 = IsUnion<"a" | "b" | "c" | "d">; // true
type Test41_4 = IsUnion<undefined | null | void | "">; // true
type Test41_5 = IsUnion<{ a: string | number }>; // false
type Test41_6 = IsUnion<string | never>; // false
type Test41_7 = IsUnion<string | "a">; // false
