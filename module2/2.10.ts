{
 // mapped type and look up type


    // look up type    ---> jokhon type object theke kono nirdishto key er type diye alada type create korbo tokhon shetai look up type : 

    type Height = AreaStr['height']


    //  mapped type   ---> jokhon kono type er same key gulo diye onno type banabo tokhon amra purber type er upor map caliye sheta korte pari :

    type AreaStr = {
        height : string;
        width : string;
    };

    type AreaNum ={
        [index in keyof AreaStr ] : number;
    }

    // amra ai mapped type er moddhe generic use kore sheta k aro powerful korte pari : jemon amra jodi emon cai je mapped type use korar maddhome amra jei new type create korchi shetate vinno vinno type cai tahole look up , mapped o generic er combination a sheta korte pari: example: 

    type AreaType<T> = {
        [index in keyof T] : T[index]
    }

    const area : AreaType<{width: string, height: number }> = {
        width : '10',
        height : 20
    }


 //   
}