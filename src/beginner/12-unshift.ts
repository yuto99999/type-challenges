// Array.unshiftの実装

type Unshift<T extends unknown[], U> = [U, ...T];

type UnshiftTest = Unshift<[], 1>; // [1]
type UnshiftTest2 = Unshift<[1, 2], 0>; // [0, 1, 2]
type UnshiftTest3 = Unshift<["1", 2, "3"], boolean>; // [boolean, "1", 2, "3"]



// 学び
// array.unshiftとは
// -> 配列の先頭に要素を加える
