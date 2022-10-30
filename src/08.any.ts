(() => {
    let myDinamicVar: any;
    myDinamicVar = 100;
    myDinamicVar = 'sss';
    myDinamicVar = {};
    myDinamicVar = null;
    // se aconseja no utilizar any
    myDinamicVar = 'Aola';;
    //cast
    const rta = (myDinamicVar as string).toLowerCase()
    console.log({ rta });

    myDinamicVar = 1212;
    const secondRTA = (<number>myDinamicVar).toFixed();
    console.log({ rta });

})()