{
    // OOP  ----> object oriented programming 

    // class : 
     class Person {
        name : string;
        email : string;


        constructor(name : string, email : string){
            this.name = name,
            this.email = email
        }

        SayPerson() {
            console.log(`${this.name} 's email is ${this.email}`)
        }

     }

    //  ai kaj take aro shohoje korte pari : 
     class PersonEasy {

        // parameters properties
        constructor(public name : string, public email : string){}

        SayPerson() {
            console.log(`${this.name} 's email is ${this.email}`)
        }

     }

     const Person1 = new Person('Mahfuz', '#@gmail.com')
     const PersonEasy1 = new PersonEasy('abu', 'llkl@gmail.com')


     Person1.SayPerson()
     PersonEasy1.SayPerson()

    // 
}