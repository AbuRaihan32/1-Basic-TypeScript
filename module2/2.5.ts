{
 // function with generic:


 const createArr = <T> (params : T) : T[] =>{
    return [params]
 }


 const strRes = createArr<string>('hello');
 const NumRes = createArr<number>(1000);


interface User {id: number, name : string}

 const objRes = createArr<User>({id: 100, name : 'Ari'});



//  generic with tuple 

    const createArr2 = <T1, T2> (params1 : T1, params2 : T2) : [T1, T2] =>{
        return [params1, params2]
    }  
    
    const resArr = createArr2<string, number>('shamim', 2000);


 //
}