// Promiseライクなオブジェクトの配列を受け取る関数に型をつける

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: Awaited<T[P]> }>;

const Test22_1 = PromiseAll([1, 2, 3] as const) // Promise<[1, 2, 3]>
const Test22_2 = PromiseAll([1, 2, Promise.resolve(3)] as const) // Promise<[1, 2, number]>
const Test22_3 = PromiseAll([1, 2, Promise.resolve(3)]) // Promise<[number, number, number]>
const Test22_4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]) // Promise<number[]>



// 学び
// valuse: readonlt [...T]
// readonlyの配列に制約する

// -> なぜTest22_3のような読み取り専用ではない配列を渡してもエラーが出ないのか?
// tsは配列リテラルを直接渡すと、特別に型の変換を許可する
// 変数に一度代入するとダメ

// OKパターン
// PromiseAll([1, 2, Promise.resolve(3)])

// NGパターン
// const arr = [1, 2, Promise.resolve(3)];
// PromiseAll(arr)


// 復習
// Awaited<T>
// PromisLikeな型から最終的な型の解決値を抽出する
