// answer 1
type First<T extends any[]> = T extends [infer U, ...any[]] ? U : never;

//answer 2
// type First<T extends any[]> = T extends [] ? never : T[0]

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type arr3 = [];
type arr4 = [() => 123, { a: string }];
type arr5 = [undefined];

type text = "notArray";

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<arr3>; // expected to be never
type head4 = First<arr4>; // expected to () => 123, { a: string }
type head5 = First<arr5>; // expected to be undefined

// type errCheck = First<text>  // <-  extends any[] があるとエラー出る



// 学び

// Conditional Typesとは -> https://zenn.dev/brachio_takumi/articles/464106a6a80eca8ab919
// -> 条件によって型を変更出来る機能, 三項演算子で書く
// 型の条件分岐にはextendsの記述が必要
type ConditionalTypeCheck<T> = T extends string ? string : number;

type ConditionalTypeCheckStr = ConditionalTypeCheck<string>; // string
type ConditionalTypeCheckBoolean = ConditionalTypeCheck<boolean> // number (booleanにしたのにnumberになる)

// ... -> スプレッド構文 -> https://typescriptbook.jp/reference/values-types-variables/array/spread-syntax-for-array
// タプルの型を表現する構文
// 簡単にいうと省略してかけるイメージ
const list = ["Japan", "China", "Korea"]
const NewList = [...list, "France"]
console.log(NewList) // ["Japan", "China", "Korea", "France"]

// infer -> https://zenn.dev/brachio_takumi/articles/464106a6a80eca8ab919
//直訳すると推論 -> 型推論行う
//「型の中から必要な部分を取り出して名前をつける」ための道具
// 型を推論するのに、なぜstringではなく配列の最初の要素が抽出されるのか(-> "a"や3など)
// -> TypeScriptは型推論を行うとき、可能な限り具体的な型を推論を行う
// -> ["a", "b", "c"]のような場合、最初の要素は明確に"a"という文字列である
// ->型として"a"が推論される(-> 文字リテラル型)

// [infer U, ...any[]] の解説
// 「最初の要素の型をUとして推論し、残りは何でも良い」＝ 「最初の要素の型を推論せよ」という意味になる

// [] -> 空の配列を意味する

// その他の参考記事

// スプレッド構文
// https://mosya.dev/blog/tc-first
// https://zenn.dev/collabostyle/articles/7dccfeecfb400a
// https://reosablo.hatenablog.jp/entry/2020/08/25/005957
