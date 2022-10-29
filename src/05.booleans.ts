(() => {
    let enable = true;
    enable = false;
    let isNew: boolean = true;
    console.log({ isNew })
    isNew = false;
    console.log({ isNew })

    //valores entre 0 y 1
    const random = Math.random();
    console.log({ random })
    isNew = random > 0.5
    console.log({ isNew })

    // recomendacion usar el tipo boolean
    // con minuscula
    const myBoolean: boolean = true;
})()