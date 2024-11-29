// 2つの型の差分を取得する型の実装

// Answer1
type Diff<O1, O2> = {
  [K in keyof (O1 & O2) as K extends keyof (O1 | O2) ? never : K]: (O1 & O2)[K];
};

// Answer2
// type Diff<O1, O2> = Omit<O1 & O2, keyof (O1 | O2)>;

type Foo38 = {
  name: string;
  age: string;
};
type Bar38 = {
  name: string;
  age: string;
  gender: number;
};
type Coo38 = {
  name: string;
  gender: number;
};

type Test38_1 = Diff<Foo38, Bar38>; // { gender : number; }
type Test38_2 = Diff<Foo38, Coo38>; // { age: string; gender: number; }


// 学び

// インターセクション型 「&」-> https://typescriptbook.jp/reference/values-types-variables/intersection
// オブジェクトの定義を合成させる
// 合成したいオブジェクト同士を&で列挙

// [K in keyof (O1 & O2) as K extends keyof (O1 | O2) ? never : K] の as
// 1. マッピングされたタイプの各キーに対して、( -> [K in keyof (O1 & O2)])
// 2. K extends keyof (O | O1) ? never : K という条件を適用
// 要するにasを使うことで条件付けをしてくれる