// タプルの値からユニオン型を作成

type TupleToUnion<T extends unknown[]> = T[number];

type Test18_1 = TupleToUnion<["Japan", "Italy", "France"]>; // "Japan" | "Italy" | "France"
type Test18_2 = TupleToUnion<[1, "Tom", 100]>; //  1 | "Tom" | 100
type Test18_3 = TupleToUnion<[1, "string", true]>; // true | "string" | 1


// 復習
// T[number]
// 配列にnumber型を指定することで、配列の要素全てをユニオン型で返す