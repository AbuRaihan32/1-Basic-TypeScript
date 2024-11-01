{

// destructuring


// object destructuring

const friends = {
    age : 10,
    name : {
        firstName : 'abu',
        lastName : 'mahfuz',
    },
    contact : '01446478'
};


const {age , contact, name: {firstName}} = friends;



// array destructuring

const myFriends : string[] = ['hozrot', 'selim', 'shamim', 'alu', 'nuru'];

const [, , best, ...rest] = myFriends;






}