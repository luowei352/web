function cala(add) {
    return function (origin) {
        return function (mul) {
            return (origin + add) * mul;
        }
    }
}

let a = cala(1)(2)(3);

console.log(a);

let calala = add => origin => mul => (origin + add) * mul;

 a = calala(1)(2)(3);

console.log(a);