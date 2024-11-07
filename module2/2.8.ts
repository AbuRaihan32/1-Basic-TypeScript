{
 // asynchronous typeScript

type Todo = { userId: number, id: number, title: string, completed: boolean }

 const getTodo = async () : Promise<Todo> =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();

    console.log(data)
    return data
 }

getTodo()

 type PromiseType = string;

 const createPromise = () : Promise<PromiseType> =>{
    return new Promise<PromiseType>((resolve, reject) =>{
        const data : PromiseType = 'kuch vi';

        if(data){
            resolve(data)
        }
        else{
            reject('failed to load data')
        }
    })
 }

 const showData = async () : Promise<PromiseType> =>{
    const data : PromiseType = await createPromise();
    return data
 }


 showData()







 //
}