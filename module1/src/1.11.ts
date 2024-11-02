{
 //
    
    // ternary operator , optional chaining , nullish coalescing operator   -----> ?

    // nullish coalescing operator ----> when i make decision based to null or undefined;

    const isAuthenticated = null; 

    const result = isAuthenticated ?? 'Gest';

    console.log({result});



    type User = {
        name : string;
        address : {
            permanentAddress : string;
            presentAddress ? : string;
            home : string;
        }
    }
 

    const user : User ={
        name : 'abu',
        address : {
            home : 'abu villa',
            permanentAddress : 'kurigram',
        }
    }

    const result2 = user?.address?.presentAddress ?? 'no permanent address' ; 

    console.log({result2})







 //  
}