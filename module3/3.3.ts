{
  // type guards    -----> example dekhlei clear hoye jabe :




    // typeof guard : example :

    type Add = (param1 : number | string, param2 : number | string) => number | string;

    const add : Add = (param1, param2) =>{
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }


    const result = add('1', '2');
    console.log(result)





    //  in guard : example 

    type User = {
      name : string;
    }

    type Admin = {
      name : string;
      role : string;
    }


    const getUser = (user : User | Admin) => {
        if('role' in user){
          console.log(`hello! Im ${user.name} and my role is ${user.role}`)
        }else{
          console.log(`hello! Im ${user.name}`)
        }
    }


    const user : User = {
      name : 'mahfuz'
    };

    const admin : Admin = {
      name : 'admin shab',
      role : 'Admin'
    }
    
getUser(admin)

  //  
}