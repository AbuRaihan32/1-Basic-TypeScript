{
    // interface  ---> its work like alias type, but alias work in primitive and non primitive, and the interface use just for object;



    type User1 = {
        name : string;
        money : number;
    }


    interface User2 {
        name : string;
        money : number;
    }

    const user1 : User2 = {
        name : 'abu',
        money : 1000
    }




    // amra jodi alias use kori tahole type er kono object jodi baraite hoy tahole intersection use korte pari ar jodi interface use kori tahole extends keyword use korte pari. 


    // intersection example : 

    type UserWithRole = User1 & { role : string}

    const userWithRole : UserWithRole ={
        money : 100,
        name : 'mahfuz',
        role : 'manager'
    }


    // extends example : 

    interface UserWithRole2 extends User2 {role : string}

    const userWithRole2 : UserWithRole2 ={
        money : 100,
        name : 'mahfuz',
        role : 'manager'
    }


    // amra caile type kew extends er por use korte pari: jemon ekhane User1 use kora hoyeche

    interface UserWithRole3 extends User1 {role : string}

    const userWithRole3 : UserWithRole3 ={
        money : 100,
        name : 'mahfuz',
        role : 'manager'
    }





    // js er moddhe jehetu array and function o akti object tai amra caile akhanew interface use korte parbo . tobe amra alias use korbo ai dui khetre. karon atai simple:

    // array example : 

    interface NumArr {
        [index : number] : number
    }

    const numArr : NumArr = [10, 20,]


    // function example : 

    interface Add {
        (num1 : number , num2 : number) : number
    }

    const add : Add = (num1, num2) => num1 + num2


    // 
}