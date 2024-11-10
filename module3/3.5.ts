{
    // access modifier :  public , privet, readonly , protected;

    // public is default : etar mane holo class er instance o child class ovoyta theke take access kora jabe ,

    // private : etar kaj holo : shudhu matro parent class er take access kora jabe ,

    // readonly : mane holo shudhu read kora jabe change kora jabe na .

    // protected : mane holo, instance a access pawa jabena but child class theke pawa jabe :    example :


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



        depositBalance(money : number){
            this.balance = this.balance + money
        }

        getBalance(){
            return this.balance;
        }


    }

    class studentAccount extends BankAccount {
        
    }



    const account = new BankAccount('Mahfuz', 102, 250, 'al');
    account.depositBalance(150);
    const myBalance = account.getBalance();

    console.log(myBalance)







    // 
}