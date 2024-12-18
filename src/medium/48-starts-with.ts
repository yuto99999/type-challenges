// 文字列Tが文字列Uで始まるかを判定する

type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false;

type Test48_1 = StartsWith<"abc", "ab">; // true
type Test48_2 = StartsWith<"abc", "ac">; // false
type Test48_3 = StartsWith<"abc", "abcd">; // false
type Test48_4 = StartsWith<"", "">; // true


// 自力
// extendsとテンプレートリテル型を使う発想はあった。
// Uが先頭にあるかどうかを判断するのに、${infer F}とか考えて再帰か？っていう思考になった。
// もっとシンプルに!

// 学び
// `${U}${string}`と`${U}${infer Rest}`の使い分け。
// 1.{string}
// 任意の文字列であることを意味する(長さに制限ない)。
// 抽出は不可。
// 今回のような、シンプルに判定する場合に使用。

// 2.{infer Rest}
// 該当部分を新しい型Restとして抽出する。
// 型として取り出し、その型をまた操作できる。
// 複雑な型操作や後続部分を扱う場合に使用。