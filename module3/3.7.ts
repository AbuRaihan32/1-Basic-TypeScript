{
    //  static oop ---> atar mane holo, jokhon amra static use korbo na tothon prottek ta tokhon prottek ta instance er property gulo alada memory te store hoye thake , jar fole kono atka instance ke change korle opor instance provab fele na, akhon amra jodi emon cai je, static hobe tahole static word use korar maddhome sheta korte pari : example :

    class Counter {
        static count : number = 0;

        static increment (){
           return Counter.count = Counter.count + 1
        }


        static decrement (){
            return Counter.count = Counter.count -1
        }
    }


    console.log(Counter.count)
    console.log(Counter.increment())
    console.log(Counter.decrement())














    // 
}