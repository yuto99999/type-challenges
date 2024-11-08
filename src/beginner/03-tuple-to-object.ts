// Tuple型からObject型を生成するTupleToObjectを実装してください。

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type TupleToObject<T extends readonly(string | number | symbol)[]> = {[V in T[number]] : V}

type result = TupleToObject<typeof tuple>; 
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}



// 学び

// そもそもタプルとは
// ->特定の型と順序を持つ要素の集まり。配列とは異なり、各要素の型を個別に指定できる。

// constアサーション 「as const」 -> https://typescriptbook.jp/reference/values-types-variables/const-assertion
// readonlyのタプル型で取得。


