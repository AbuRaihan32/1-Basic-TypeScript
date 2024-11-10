{
    // polymorphism      ----> ak e method jokhon esthan kal parto vede vinno output dey tokhon sheta kei polymorphism bole;
    // example :

    class Shape {
        getArea = () : number =>{
            return 0
        }
    }



    class Circle extends Shape {
        radius : number ;

        constructor(radius : number){
            super()
            this.radius = radius;
        }
        getArea = () : number => {
            return Math.PI * this.radius * this.radius
        }
    }



    class Rectangle extends Shape {
        width : number;
        height : number; 

        constructor(width : number, height : number){
            super();
            this.width = width;
            this.height = height;
        }

        getArea = () : number => {
            return this.width * this.height
        }
    };


    const getArea = (area : Shape) => {
        console.log(area.getArea())
    }


    const area1 = new Circle(10);
    const area2 = new Rectangle(10, 20);


    getArea(area1)
    getArea(area2)















    // 
}