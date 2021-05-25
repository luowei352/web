function fib(n){
    if(n==1||n==2){
        return 1;
    }
    return fib(n-1)+fib(n-2);
}
//由于n每增加1上面这段代码就会被多执行一次，所以时间复杂度为O(n)
let n =8;
let a = fib(n);
console.log("斐波那契数列的第"+n+"项为"+a);