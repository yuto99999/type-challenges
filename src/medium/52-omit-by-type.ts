// Tから型がUに適合するプロパティを削除

type OmitByType<T, U> = { [P in keyof T as T[P] extends U ? never : P]: T[P] };

interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type Test52_1 = OmitByType<Model, boolean>; // { name: string, count: number }
type Test52_2 = OmitByType<Model, string>; // { count: number, isReadonly: boolean, isEnable: boolean }
type Test52_3 = OmitByType<Model, number>; // { name: string, isReadonly: boolean, isEnable: boolean }


// 復習
// PickByTypeと同じ