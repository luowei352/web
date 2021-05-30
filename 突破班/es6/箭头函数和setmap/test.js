let fun1 = (i) => i * 2;
let fun2 = (i) => {
    i * 2;
};

console.log(fun1(1)); // 2
console.log(fun2(1)); // undefined
