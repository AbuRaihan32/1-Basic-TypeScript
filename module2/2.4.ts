{
 //  generic with interface

    interface Developer<T, X = null> {
        name : string ;
        bike : {
            model : string;
            brand : string;
            price : number;
        };
        phone : T;
        bow ? : X;   
    }


    const developer1 : Developer<{brand: string, price : number}> ={
        name: 'mahfuz',
        bike : {
            brand: 'Honda',
            model: 'X-blade',
            price: 227000,
        },
        phone: {
            brand: 'realme',
            price: 15000
        },
    }


    interface Phone {brand: string, price : number};
    type Bow = {name : string, age: number}

    const developer2 : Developer<Phone, Bow> ={
        name: 'shamim',
        bike : {
            brand: 'hero',
            model: 'X-blade',
            price: 90000,
        },
        phone: {
            brand: 'realme',
            price: 15000
        },
        bow : {
            age: 18,
            name: 'ss'
        }
    }




 //
}