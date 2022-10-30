(() => {
    // ahora la variable "id" puede tomar 
    // ya se un valor string o un valor numerico
    let id: string | number;
    id = 'id';
    id = 123;

    function gretin(myText: string | number) {
        if (typeof myText == 'string') {
            console.log(`string ${myText.toLowerCase()}`)
        } else {
            console.log(`number ${myText.toFixed()}`)
        }
    }

    gretin('aaa');
    gretin(465);


})()