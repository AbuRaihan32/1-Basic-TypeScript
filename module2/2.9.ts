{
  // conditional type

  type A = string;

  type B = undefined;

  type X = A extends null ? true : false;

  type Y = A extends null ? true : B extends undefined ? true : false;


  type Person = {
    bike : string;
    name : string;
    money : number;
  }

  type CheckKey<T> = T extends keyof Person ? true : false;


  type HasBike = CheckKey<'name'>


  //
}
