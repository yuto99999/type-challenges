// 配列の最後の要素の型を返すLast<T>の実装

// My Answer
type Last<T extends any[]> = T extends [...any[], infer U] ? U : never;

// Another
// type Last<T extends any[]> = [never, ...T][T["length"]];

type test20_1 = Last<[]>; // never
type test20_2 = Last<[1]>; // 1
type test20_3 = Last<[1, 3, 5]>; // 5
type test20_4 = Last<[() => 123, { a: string }]>; // {a : string}



// 学び
// Anotherの処理について
// 受け取った配列を[never]に追加する
// -> T["length"]で返された配列の長さを利用して、最後の要素を返す