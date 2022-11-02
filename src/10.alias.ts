// (()=>{

// })()
(() => {
    //vamos a crear un propio tipo o alias type
    type UserID = string | number;

    let id: UserID;
    // function gretin(id: UserID) {
    //     if (typeof id == 'string') {
    //         console.log(`string ${id.toLowerCase()}`)
    //     }
    // }

    //literal types

    //let shirtsSize: string;
    //let shirtsSize: 'S' | 'M' | 'L'| 'XL' | 'sdfg'
    type Sizes = 'S' | 'M' | 'L' | 'XL' | 'sdfg'
    let shirtsSize: Sizes;
 
    function gretin(id: UserID,size : Sizes) {
        if (typeof id == 'string') {
            console.log(`string ${id.toLowerCase()}`)
        }
    }

    gretin(11,'L')
    gretin('111','M')

})()