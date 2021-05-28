/*
function* fib(){
    let i = [1,1];
    let a = 0;
    while(1){
        i(a) =yield i(a-2) + i(a-1);  
    }
}
let [first, second, third, fourth, fifth, sixth] = fib();

此处妄图模仿问答题里那个做法，但是失败了
*/
function fibonacci(n) {
    let n1 = 1;
    let n2 = 1;
    for (let i = 2; i < n; i++) {
        [n1, n2] = [n2, n1 + n2];
    }
    return n2;
}