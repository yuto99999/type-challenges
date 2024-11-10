// type ifの実装

type If<C extends boolean, T, U> = C extends true ? T : U;

type IfTest1 = If<true, "a", "b">;     // "a"
type IfTest2 = If<false, "a", "b">;    // "b"
type IfTest3 = If<boolean, "a", "b">;  // "a" | "b"



// 発想

// 1.とりあえずCをbooleanに制限する
// 2.とりあえずIfTest1,2をクリアするために、trueでT, falseでUの三項演算子記述
// 3.エラー消えた。なんで？


// 学び

// booleanの性質
// booleanはtrue | falseのユニオン型
// IfTest3ではunion destribution(分配法則)が発動される
// 今回(IfTest3)の場合
// If<boolean, "a", "b">
// -> If<true | false, "a", "b">
// -> If<true, "a", "b"> | If<false, "a", "b">
// -> "a" | "b"


// 復習

// Conditional Typesのunion distribution
// ユニオン型の場合、分配法則してくれる性質がある