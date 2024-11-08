{
    // utility types 

    // 1. Pick     ----> kono existing Type theke nirdishto key k type shoho tule new type banano;   example :

        type Person = {
            name : string;
            age : number;
            email : string;
            phoneNO ? : string;
        };


        type NameAgeType = Pick<Person, 'name' | 'age'>
        

    // 2. Omit      -----> ata Pick Er ulto: mane akhane jei key deya hobe shegulo bade bakigulo diye type banabe. example :
    
        type ContactInfo = Omit<Person, "name" | "age">
        

    // 3. Required     --->  kono existing type er shob key ke required baniye new type create kora: example 
    
        type PersonRequired = Required<Person>



    // 4. Partial     ----> ata required er ulto. mane kono type er shob key k optional baniye new type create kora : example:
        
        type PartialPerson = Partial<Person>


    // 5. Readonly   ----> kono type use kore create kora kono object er man jodi amra emon korte cai je ta shudhu pora jabe change kora jabe na : tahole Readonly diye sheta korte pari. example :
        
        type PersonReadonly = Readonly<Person>;

        const person1 : PersonReadonly = {
            age : 12,
            email : 'll',
            name : 'abu',
        }
        // person1.age = 13;

        

    // 6. Record     ----> jodi amra emon cai je jhokon kono obj te emon kono property add kora hobe ja type a ullekh kora hoy nai, seta automatic type a add hobe shekhetre amra ata use korbo : example : 
    
        type Obj = Record<string, string> ;

        const obj : Obj = {
            a : 'abu',
            b : 'mah',
            c : 'b'
        }


        type EmptyObject = Record<string, unknown>;


    // 
}