{
//  
    // union type ----> similar topic with logical or in javaScript ( || )


    type FrontEndDeveloper = 'reactDeveloper' | 'nextDeveloper';
    type FullStackDeveloper = 'ExpressJsDeveloper' | 'MongooseDeveloper';


    type Developer = FrontEndDeveloper | FullStackDeveloper ;

    const NewDeveloper : Developer = 'reactDeveloper';
    



    type User = {
        name : string;
        phone : string;
        bloodGroup : "O+" | 'B+';
        gender : 'male' | 'female'
    }


    const user : User = {
        name : 'abu',
        phone : "0512634632",
        bloodGroup : 'O+',
        gender : 'male'
    }



    // intersection Type ----> similar topic with logical and in javaScript ( && )


    type FrontEnd = {
        skills : string[];
        designation1 : "frontEnd developer" 
    }

    type BackEnd = {
        skills : string[];
        designation2 : 'backEnd developer'
    }

    type FullStack = FrontEnd & BackEnd;

    const fullstackDeveloper : FullStack = {
        skills : ['html', 'css'],
        designation1 : 'frontEnd developer',
        designation2 : "backEnd developer",
    }


// 
}