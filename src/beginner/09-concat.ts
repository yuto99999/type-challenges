// Array.concat関数を実装

type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];

const ConcatTuple = [1] as const;

type ConcatTest = Concat<[], []>; // []
type ConcatTest1 = Concat<[], [1]>; // [1]
type ConcatTest2 = Concat<typeof ConcatTuple, typeof ConcatTuple>; //[1, 1]
type ConcatTest3 = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
type ConcatTest4 = Concat<["1", 2, "3"], [false, boolean, "4"]>; //  ['1', 2, '3', false, boolean, '4']

// type error = Concat<null, undefined> // 配列ではないためエラー



// 学び

// Array.concatとは
// 配列を連結するために使用する関数(連結 : Concatenation)
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2); // array3 = ["a", "b", "c", "d", "e", "f"]


// ...(スプレッド演算子) -> https://typescriptbook.jp/reference/values-types-variables/array/spread-syntax-for-array
// -> 配列やオブジェクトの中身を展開する演算子
// 配列やオブジェクトの中身を展開して、新しい配列やオブジェクトを生成する。

// 配列の作成
const arr1 = [1, 2, 3] as const;
const newArr1 = [...arr1, 4] as const; // readonly [1, 2, 3, 4] (<- 中身を見やすくするためにas constで読み取り専用配列にした)

// 配列の連結(今回やったこと)
const arr2 = [10, 100, 1000] as const;
const arr3 = ["Tokyo", "London", "Paris"] as const;
const concatArr = [...arr2, ...arr3]; // <- 配列の連結をする際は、両方の配列を展開する必要がある！


// anyとunknownの違い -> https://typescriptbook.jp/reference/statements/any-vs-unknown
// unknownの方が型チェックが厳しい
// コンパイル時のエラーチェックが厳密。anyだとコンパイルエラーが起こらなくても、実行時にエラーになる可能性がある。


