// Union型から特定の型を属性を使って取得

type LookUp<U, T> = U extends { type: T } ? U : never;

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type test23_1 = LookUp<Animal, "dog">; // Dog
type test23_2 = LookUp<Animal, "cat">; // Cat


// 学び
// プロパティの値で条件分岐する際は、
// {type : T}
//　のような書き方をする

// tsは、より広い型はより狭い型をextendsできない
// false
// { breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer" } extends { breeds: "Boxer" }
// true
// { breeds: "Boxer" } extends { breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer" }

// -> breedsの値で条件分岐するには？
// 失敗するパターン
// type LookUp<U, T> = U extends { breeds: T } ? U : never;
// 成功するパターン
// type LookUp1<T, U extends Animal> = U extends { breeds: T } ? U : never;

// なぜ失敗するのか
// -> LookUp<Animal, "Boxer"> = LookUp<Cat, "Boxer"> | LookUp<Dog, "Boxer">
// Catに"Boxer"は含まれないのでnever
// Dogに"Boxer"は含まれるが、より広い型はより狭い型をextendsできないのでnever
