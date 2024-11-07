{
 //
 
    // type assertion ---> Atar mane hocche ami bishesh kono variable er type ki sheta as diye nirdharon kore deya.


    let anything : any;

    anything = 'hello world';

    (anything as string);



    const gmToKg = (value : string | number ) : number | string | undefined =>{
      if(typeof value === 'string'){
         const convertedValue = parseFloat(value) / 1000;
         return `total kg is ${convertedValue}`
      }
      if(typeof value === 'number'){
         return value /1000;
      }
    }

    const numValue = gmToKg(1000) as number;
    const strValue = gmToKg('20000') as string;


    console.log(numValue, strValue)








 //
}