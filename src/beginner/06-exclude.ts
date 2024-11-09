// Excludeの自作

type MyExclude<T, U> = T extends U ? never : T;

type test1 = MyExclude<"a" | "b" | "c", "a">;  // "b" | "c"
type test2 = MyExclude<"a" | "b" | "c", "a" | "b">;  // "c"
type test3 = MyExclude<string | number | (() => void), Function>;  // string | number



// 学び

// Union distribution という性質 -> https://qiita.com/wataru86/items/b145bb8dd1e44e764b99
// Conditional Typesには上記の性質がある。
// 簡単に言うと「分配法則」
// T extends X ? Y : Z の際に、Tがユニオン型の場合に分配法則のように展開される。
// ↓
// T = A | B
//(A extends X ? Y : Z) | (B extends X ? Y : Z)

// 今回の場合(test1)
// T = "a" | "b" | "c"
// ("a" extends "a" ? never : "a") | ("b" extends "a" ? never : "b") | ("c" extends "a" ? never : "c")
// -> never | "b" | "c"
// -> "b" | "c"