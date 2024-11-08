{
 // OOP ----> inheritance    ---> get properties from parent class

    class Parent {
        name : string;
        age : number;
        email : string;


        constructor(name : string, age : number, email : string){
            this.name = name;
            this.age = age;
            this.email = email;
        }


        goToSleep(){
            console.log(`${this.name} go for sleep in 10 o clock`)
        }
    }



    class Student extends Parent {
        phone : string;
        constructor(name : string, age : number, email : string, phone : string){
            super(name, age, email);
            this.phone = phone
        }
    }


    const student1 = new Student('abu', 40, 'a@', '017');

    student1.goToSleep()



 //   
}