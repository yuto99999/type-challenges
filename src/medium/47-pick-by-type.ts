// Tから、型Uに代入可能な型のプロパティだけを持つ新しい型を作成

type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] };

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type Test47_1 = PickByType<Model, boolean>; // { isReadonly: boolean, isEnable: boolean }
type Test47_2 = PickByType<Model, string>; // { name: string }
type Test47_3 = PickByType<Model, number>; // { count: number }


// 学び
// 失敗談 ~ {[... ]: T[P] as T[P] extends U ? U : never} はなぜ機能しないのか~
// 結論
// -> asの後はキー(プロパティ名)の変換しかできないから！
// T[P]は型そのものであり、asはそれを変換する文脈には使えない。