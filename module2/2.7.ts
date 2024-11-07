{
    // constraint with key of operator   ---> jokhon kono akta type er keygulo diye vinno akta union type create korte cai tokhon nicer system korte hobe,

    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }
 
    type Choice1 = keyof Vehicle;      // ---> It's create an union type with Vehicle keys;


    // real case example : 


    const getValueByProperty = <X, Y extends keyof X> (obj: X, key : Y) =>{
        return obj[key]
    }
    
    const user = {
        name : 'mahfuz',
        id: 11452
    }

    const result = getValueByProperty(user, 'name')
    //
}