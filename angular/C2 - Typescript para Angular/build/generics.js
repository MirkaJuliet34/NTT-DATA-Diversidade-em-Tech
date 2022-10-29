"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["aline", "goku"], ["vegeta"]);
console.log(numArray);
console.log(stgArray);



///////////////////////////
usando generics na pratica

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}
const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["aline", "goku"], ["vegeta"]);


console.log(numArray);
console.log(stgArray);