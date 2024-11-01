
// Reference type --> Object

// siple Object
let userObj_1 : {
    firstName : string;
    MiddleName : string;
    LastName : string;
} = {
    firstName : 'Abu',
    MiddleName : 'Raihan',
    LastName : 'Mahfuz',
}


// example for Optional type 
let userObj_2 : {
    firstName : string;
    MiddleName?: string;  // optional type
    LastName : string;
} = {
    firstName : 'Abu',
    LastName : 'Mahfuz',
}


// example for Literal Type
let userObj_3 : {
    company : 'it bari';  // literal type --> when the value define as type;
    firstName : string;
    MiddleName : string;
    LastName : string;
} = {
    company: 'it bari',  
    firstName : 'Abu',
    MiddleName : 'Raihan',
    LastName : 'Mahfuz',
}


// access modify
let userObj_4 : {
    readonly company : 'it bari';  // literal type --> when the value define as type;
    firstName : string;
    MiddleName : string;
    LastName : string;
} = {
    company: 'it bari',  
    firstName : 'Abu',
    MiddleName : 'Raihan',
    LastName : 'Mahfuz',
}

// userObj_4.company = 'PH';