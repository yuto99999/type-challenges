// 与えられた関数型Fnと任意の型Aに対して、Fnの引数にAを追加した新しい関数型を作成

type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer U
) => infer P
  ? (...args: [...U, A]) => P
  : never;

type Fn29_1 = (a: number, b: string) => number;
type Fn29_2 = () => void;

type Test29_1 = AppendArgument<Fn29_1, boolean>; // (a: number, b: string, x: boolean) => number
type Test29_2 = AppendArgument<Fn29_2, undefined>; // (x: undefined) => void

// @ts-expect-error
type Test29_3 = AppendArgument<unknown, undefined>; // 第1引数が関数型ではないのでエラー



// 学び

// 基本的な関数の型
// 1. 引数なし
type NoArgs29 = () => any

// 2. 固定引数
type FixedArgs29 = (x: number, y: string) => any

// 3. 可変長引数（レストパラメータ）
type RestArgs29 = (...args: any[]) => any

// 4. より具体的な型指定
type SpecificArgs29 = (...args: number[]) => string


// 堅安全性を考慮して、...args:any[] を使う( -> ...args:any だと型安全性が低い)


// tsの自動展開
type Fn29_3 = (...args: [number, string, boolean]) => number; //自動展開前
type Fn29_4 = (a: number, b: string, x: boolean) => number; // 自動展開後
// Fn29_3とFn29_4は同義