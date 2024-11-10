{
    // abstraction :    1. by interface       2. by abstract class



    // interface abstraction

    interface Vehicle {
        inputKey() : void;
        startEngine() : void;
        startMoving() : void;
    }


    class Car implements Vehicle {
        inputKey(): void {
            console.log(`I'm Input the Key in the slot`)
        }
        startEngine(): void {
            console.log(`I'm starting the car for move`)
        }

        startMoving(): void {
            console.log(`the car is moving`)
        }
    }

    
    const myCar = new Car();
   
    myCar.inputKey()



    // abstract class    -----> jokhon amra kono abstract class create korbo tokhon sheta diye instance create korte parbo na, borong sheta diye child class create kore kaj calabo.    example : 

    abstract class Vehicle1 {
        abstract inputKey(): void 
        abstract startEngine(): void 
        abstract startMoving(): void 
    };

    class Car2 extends Vehicle1 {
        inputKey(): void {
            console.log(`I'm input the key for start`)
        }
        startEngine(): void {
            console.log(`I'm start the car for move`)
        }
        startMoving(): void {
            console.log(`I'm moving the car`)
        }
    }

    const myCar2 = new Car2();
   
    myCar2.inputKey()







    // 
}