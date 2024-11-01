

// learning Function 
    // normal function
    // arrow function


// normal Function:
function add(num1 : number = 5, num2: number) : number{
    return num1 + num2
}


// arrow function
const multiply = (num1 : number, num2 : number) : number => num1 * num2;



// function in object ---> method , 
// I need to remember when I want to use function in an Object, it will normal function;

const Person = {
    name: 'mahfuz',
    money : 20,
    addMoney(money : number): number{
        return this.money + 10;
    }
}


// callback function

const arr : number[] = [5, 10, 15, 20];

const multipliedArr : number[] = arr.map((elem : number) : number => elem * elem);

