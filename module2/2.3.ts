{
 // generic type ----> dynamic type with params


    // generic type in arr

    type GenericType<T> = Array<T>;

    const numArr : GenericType<number> = [1, 2, 3, 4];

    const strArr : GenericType<string> = ['a', 'b', 'c'];

    const bullArr : GenericType<boolean> = [true, false, true];


    // generic type in array of object

    const ArrOfObject : GenericType<{name : string , age : number }> = [
        {
            name: 'mahfuz',
            age : 100
        },
        {
            name: 'abu',
            age : 120
        }
    ]




    // generic tuple :

    type GenericTuple<T1, T2> = [T1, T2];


    const User : GenericTuple<string, string> = ['shamim', 'hozrot'];

    const User2 : GenericTuple<number, {name : string, role : string, money : number}> = [1000, {money: 250452, name: 'mahfuz', role: 'admin'}]


 //
}