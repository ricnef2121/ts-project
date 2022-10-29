(() => {
    let price = 100;
    price = 12;
    console.log('price ', price)

    let customerAge: number = 28;
    customerAge = customerAge + 1;
    console.log({ customerAge })
    // de esta forma podemos declarar sin asiganr valor
    let inStock: number;

    console.log({ inStock })
    if (inStock > 10) console.log('is greater')

    let discount = parseInt('50');
    console.log({ discount })

    if (discount >= 100) {
        console.log('apply')
    } else {
        console.log('not apply')
    }

    let hex = 0xfff;
    console.log({ hex })

    let bin = 0b10101011;
    console.log({ bin })

    // typescript
    // preferentemente usado el tipado number
    // con minusculas
    let myNumber : number = 1;
})()