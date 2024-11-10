// Awaited<T>の自作

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;

type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = Promise<Promise<string | number>>;
type Z1 = Promise<Promise<Promise<string | boolean>>>;
type T = { then: (onfulfilled: (arg: number) => any) => any };

type AwaitedTest1 = MyAwaited<X>; // string
type AwaitedTest2 = MyAwaited<Y>; // {field: number}
type AwaitedTest3 = MyAwaited<Z>; // string | number
type AwaitedTest4 = MyAwaited<Z1>; // string | bbolean
type AwaitedTest5 = MyAwaited<T>; // number

// type error = MyAwaited<number>  //numberはPromisLikeではないのでerror



// 処理の流れ

// 1.Tに制約をかけ、Promise型 or PromiseLike型の値が解決(resolve)された後の型を取得
// 2.PromisLikeの型が何なのか、inferを使って型推論
// 3.Promisが入れ子になっているかを確認
// 4.入れ子の場合、MyAwaitedで再起的に処置
// 5.入れ子ではない場合はそのまま型を返す


// 学び

// Prmosie<T>とは -> https://typescriptbook.jp/reference/asynchronous/promise
// Promiseの型を指定する場合に使用する
// Tにはfulfilled(処理完了)の時に返す型を指定している。Tは省略できない。
type PromiseUser = {
  name: string;
  age: number;
};

function getUser(): Promise<PromiseUser> {
  return new Promise((resolve) => {
    const user: PromiseUser = {
      name: "Yuto",
      age: 21,
    };
    resolve(user);
  });
}

getUser().then((user: PromiseUser) => {
  console.log(user); // {name:"Yuto", age:21}
});

// Awaited<T>とは -> https://typescriptbook.jp/reference/type-reuse/utility-types/awaited
// Promise型やPromiseがネストされた型から、最終的な解決値の型を抽出する
// Promise.allとの組み合わせも可能
async function fetchData() {
  const promises = [
    Promise.resolve(1),
    Promise.resolve("hello"),
    Promise.resolve(true),
  ];

  const results = await Promise.all(promises);
  type Results = Awaited<typeof results>; // (number | string | boolean)[]
}

// PromisLikeな型(= thenableオブジェクト)とは
// thenableオブジェクトは、thenメソッドを持つオブジェクトのこと。完全なPromiseである必要はない。
// 基本的な構造例
const simpleThenable = {
  then: (resolve: any) => resolve(123),
};
simpleThenable.then((value: any) => console.log(value)); // 123
// メリット
// 1.軽量な実装: 完全なPromiseの実装よりも簡単
// 2.互換性: Promise-basedのコードと統合が容易
// 3.柔軟性: カスタムの非同期処理を実装可能
// 4.既存のPromiseシステムとの相互運用性


// 復習

// infer
// 型推論を行う
// Condtional Typesの機能の1つで、extendsを記述する。


//その他の参考記事
//https://zenn.dev/estra/articles/ts-with-promise-type-annotation
