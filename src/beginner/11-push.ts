// Array.pushの実装

// Answer1
type Push<T extends unknown[], U> = [...T, U];

// Answer2(concatよりの実装)
// type Push<T extends unknown[], U> = U extends unknown[] ? [...T, ...U] : [...T, U];

type PushTest = Push<[], 1>; // [1]
type PushTest2 = Push<[1, 2], "3">; // [1, 2, "3"]
type PushTest3 = Push<["1", 2, "3"], boolean>; // ["1", 2, "3", boolean]

// type Answer2Test = Push<[1, 2, 3], [4, 5, 6]>; //[1, 2, 3, 4, 5, 6]



// 復習
// スプレッド構文 -> https://mosya.dev/blog/tc-push
// ...を使うことによって、配列やオブジェクト中身を展開し、新たな配列やオブジェクトを生成できる
