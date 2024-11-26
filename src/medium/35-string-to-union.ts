// 文字列をユニオン型に変換する型の実装

// Answer1
type StringToUnion1<T extends string> = T extends `${infer F}${infer R}`
  ? F | StringToUnion1<R>
  : never;

// Answer2
type StringToUnion2<
  T extends string,
  V extends any[] = []
> = T extends `${infer F}${infer R}` ? StringToUnion2<R, [...V, F]> : V[number];

type Test35_1_1 = StringToUnion1<"">;
type Test35_1_2 = StringToUnion1<"a">;
type Test35_1_3 = StringToUnion1<"yuto">;

type Test35_2_1 = StringToUnion2<"">;
type Test35_2_2 = StringToUnion2<"a">;
type Test35_2_3 = StringToUnion2<"yuto">;

// 学び

// ユニオン型は重複を排除する
type StrNum35 = string | number;
type BoolNum35 = boolean | number;
type StrNumBool35 = StrNum35 | BoolNum35; // string | number | boolean
// StrNumBool35は、string | number | number | boolean にはならない。
// -> 重複したnumberを排除し、1つにまとめている。
