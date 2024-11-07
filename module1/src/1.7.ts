{
    // Spread operator
    // rest operator



    // spread operator ---> ja akta array er prottekta element k alada kore dey.

    const friends: string[] = ['a', 'b', 'c'];
    const friends1: string[] = ['e', 'd', 'sa'];

    friends.push(...friends1)

    

    // spread in object 

    const teachers = {
        bengali : 'mahfuz',
        english : 'johir',
        math : 'alamin'
    }

    const teachers2 = {
        b : 'b',
        c : 'c',
        d : 'd'
    }

    const teachersList = {
        ...teachers,
        ...teachers2
    }


    // rest operator ---> 


    const messageFriends = (...friends : string[]) =>{
        friends.forEach((elem : string) =>  console.log(`hi ${elem}`));
    }

    messageFriends('mahfuz' , 'shamim')

}