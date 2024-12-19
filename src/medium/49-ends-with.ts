// 文字列Tが文字列Uで終わるかを判定する

type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;

type Test49_1 = EndsWith<"abc", "bc">; // true
type Test49_2 = EndsWith<"abc", "d">; // false
type Test49_3 = EndsWith<"abc", "">; // true
type Test49_4 = EndsWith<"abc", " ">; // false


// StartsWithの逆バージョン