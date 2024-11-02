{
 //  nullable, unknown , Never Types
 
    // nullable type

    const searchItem = (value : string | null) => {
        if(value){
            console.log({value})
        }
        else{
            console.log('there is nothing to search')
        }
    }

    // searchItem(null);


    // unknown type :

    const getSpeedInPerSecond = (value : unknown) => {
        if(typeof value === 'number'){
           const convertedValue = (value * 1000) /3600 ;
           console.log(`speed per Second is ${convertedValue}`)
        }

        else if(typeof value === 'string'){
            const [NumValue, unit] = value.split(' ');

            const convertedValue = (parseFloat(NumValue) * 1000) /3600 ;
            console.log(`speed per Second is ${convertedValue}`)
        }
        else{
            console.log('wrong Input')
        }
    }

    getSpeedInPerSecond('1000 ms^-1');



    // never type ----> when we sure the function not return any value;

    const throwErr = (mess : string): never =>{
        throw new Error(mess)
    }

    throwErr('error')

 //
}