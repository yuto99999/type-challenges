// 指定したkeyの型を変更する型の実装 

type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};

type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type Test42_1 = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
>; // ReplacedNodes

type ReplacedNodeA = {
  type: "A";
  name: number;
  flag: string;
};

type ReplacedNodeB = {
  type: "B";
  id: number;
  flag: string;
};

type ReplacedNodeC = {
  type: "C";
  name: number;
  flag: string;
};

type ReplacedNodes = ReplacedNodeA | ReplacedNodeB | ReplacedNodeC;

type Test42_2 = ReplaceKeys<Nodes, "name", { aa: number }>; // NodesNoName

type NoNameNodeA = {
  type: "A";
  flag: number;
  name: never;
};

type NoNameNodeC = {
  type: "C";
  flag: number;
  name: never;
};

type NodesNoName = NoNameNodeA | NoNameNodeC | NodeB;

// 処理の流れ

// 1. 引数を受け取る
// 何を受け取るの？
// ①元になるオブジェクト
// ②型を変更したいプロパティ名
// ③オブジェクト -> { 変更したいプロパティ : 変更後の型 }

// 2. [K in keyof U]: K
// まずはKにU(元になるオブジェクト)のプロパティを入れて、{ Uのプロパティ: Uのプロパティ }　の形にする。
// keyof演算子の利用

// 3. [K in keyof U]: K extends T ? ... : U[K];
// 1回目の条件分岐。
// KがT(変更したいプロパティ)なら...、そうでないならU[K]を返す。
// U[K] -> 元のオブジェクト[プロパティ] -> 変更しない場合なので、特に変更のない値を返す。

// 4. ... T ? (K extends keyof Y ? Y[K] : never) : ...
// 2回目の条件分岐。
// KがTの場合、KがY({ 変更したいプロパティ : 変更後の型 })のプロパティかどうか確かめる。
// KがYのプロパティなら、Y[K]、そうでないならneverを返す。
// neverを返すように分岐することで、Yに予期せぬプロパティが入っている場合のケースに備える。


// 学び
// ユニオン型がややこしくなってもやることは一緒で、まずはシンプルに1つで考えてみる。
// 条件分岐が複雑になっても、1つずつ分岐の先を考える。どんな値を期待するのか明確にする。
// 面倒に思わない。

// 技術的な新しい学びは何1つない。考える力が試される。

