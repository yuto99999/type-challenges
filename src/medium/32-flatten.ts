// ネストされた配列をフラットにする型の実装

type Flatten<S extends any[], T extends any[] = []> = S extends [
  infer X,
  ...infer Y
]
  ? X extends any[]
    ? Flatten<[...X, ...Y], T>
    : Flatten<[...Y], [...T, X]>
  : T;

type Test32_1 = Flatten<[]>; // []
type Test32_2 = Flatten<[1, 2, 3, 4]>; // [1, 2, 3, 4]
type Test32_3 = Flatten<[1, [2], [[3]]]>; // [1, 2, 3]
type Test32_4 = Flatten<[1, [2], [[3], 4], [[[5]]]]>; // [1, 2, 3, 4, 5]

// @ts-expect-error
type error = Flatten<'1'>


// 処理の流れ(Flatten<[1, [2], [[3]]]>の場合)

// 1. Flatten<S extends any[], T extends any[] = []>
// S -> 引数が配列なのでOK
// T -> default valueで空の配列が渡されているので問題ない

// 2. S extends [infer X, ...infer Y] ? ...
// X -> 1
// y -> [[2], [[3]]]

// 3. X extends any[] ? ...
// X -> 1
// -> Xは配列ではないので、条件分岐のfalseの際の処理を実行

// 4. Flatten<[...Y], [...T, X]>
// -> Flatten<[[2], [[3]]], [1]>

// 5. S extends [infer X, ...infer Y] ? ...
// X -> [2]
// Y -> [[3]]

// 6. X extends any[] ? ...
// X -> [2]
// -> Xは配列なので、trueの処理が実行

// 7. Flatten<[...X, ...Y], [1]>
// -> Flatten<[2, [3]], [1]>

// 8. S extends [infer X, ...infer Y] ? ...
// X -> 2
// Y -> [3]

// 9. X extends any[] ? ...
// X -> 2
// -> Xは配列ではないので、falseの処理が実行

// 10. Flatten<[...Y], [1, 2]>
// -> Flatten<[3], [1, 2]>

// 11. S extends [infer X, ...infer Y] ? ...
// X -> 3
// Y -> []

// 12. X extends any[] ? ...
// X -> 3
// -> Xは配列ではないので、falseの処理が実行

// 13. Flatten<[...Y], [1, 2]>
// -> Flatten<[], [1, 2, 3]>
// -> [1, 2, 3]


// 学び
// default valueは新しく何かを生成したい時に、受け入れるものとして役立つ