{
    // type alias  --> store all type in a variable for reuse;

    type Students = {
        name : string;
        age : number;
        contactNo : string;
        address ? : string;
    }



    const student1 : Students = {
        name : 'abu',
        age: 25,
        contactNo : '01763122',
        address : 'lalmonirhat',
    }

    const student2 : Students = {
        name : 'abu',
        age: 25,
        contactNo : '01763122',
    }


    // type alias in string and boolean
    type User = string; 
    type IsPoor = boolean;

    const user : User = 'Abu Rufaida';
    const isPoor : IsPoor = true;



    // type alias in function 

    type Add = (num1 : number, num2 : number) => number;

    const add : Add = (num1, num2) => num1 + num2 ;


    // 
}