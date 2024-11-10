{
    // getter and setter

    class BankAccount {
        name : string;
        readonly id : number;
        protected balance : number;
        private _secretKey : string;


        constructor(name : string, id: number, balance : number, secretKey : string){
            this.name = name ;
            this.id = id;
            this.balance = balance;
            this._secretKey = secretKey;
        }



        set Deposit (money : number){
            this.balance = this.balance + money
        }

        get Balance(){
            return this.balance;
        }


    }

    class studentAccount extends BankAccount {
        
    }



    const account = new BankAccount('Mahfuz', 102, 250, 'al');
    account.Deposit = 100;
    const myBalance = account.Balance;

    console.log(myBalance)






    // 
}