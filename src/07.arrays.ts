(() => {
    let price = [1, 2, 3, 4, 'hola', true];
    // price.push('ss');
    // price.push(true);
    // price.push({});
    price.push(2222)

    let products = ['ss', true];
    products.push(false);

    //array 
    let mixed: (number | boolean | string)[] = ['hola', true]
    mixed.push(12);
    // mixed.push({});
    // mixed.push([]);

    let numbers = [1, 2, 3, 4];
    numbers.map(item => item * 2)

})()