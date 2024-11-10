{
    //  instanceof guard :

    class Animal {
        name : string;
        sound : string;

        constructor(name : string, sound : string){
            this.name = name;
            this.sound = sound;
        }


        makeSound() {
            console.log(`I'm Making Sound`)
        }
    }


    class Cat extends Animal {
        constructor(name : string, sound : string){
            super(name , sound)
        }

        makeCatSound(){
            console.log(`I'm making sound with ${this.sound}`)
        }
    }

    class Dog extends Animal {
        constructor(name : string, sound : string){
            super(name , sound)
        }

        makeDogSound(){
            console.log(`I'm making sound with ${this.sound}`)
        }
    }


    const getAnimal = (animal : Animal) =>{
        if(animal instanceof Dog){
            animal.makeDogSound()
        } else if(animal instanceof Cat){
            animal.makeCatSound()
        } else{
            animal.makeSound()
        }
    }


    const dog = new Dog('dog', 'bok bok');
    const cat = new Cat('cat', 'meaw');



    getAnimal(cat)





    // 
}