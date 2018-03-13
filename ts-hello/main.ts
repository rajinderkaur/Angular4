import construct = Reflect.construct;

function log(message){
console.log(message)
}

var message = "Hello World";
log(message);

let count: number;
let c: number[] =[1,2,3];
let e: any[] = [2,3,"tes",null];


/*enum concept*/

const colorRed = 0;
const  colorGreen =1;
const  colorBlue = 2;

enum Color {red =0,green=1,blue=2};
let backgroundColor = Color.blue;

/*type assertions*/

let message1 = "abc";
message1.toUpperCase();
console.log(message1)

// if u dnt initialize the let then its type is any by deafult, then u need to do the following to work with string function
let message2 ;
message2 = "cde";
let result = (<string>message2).toUpperCase();
// other way

let result1 = (message2 as string).toUpperCase();


/*arrow function*/
let log1 = function (message) {
  console.log(message)

}
// change to this lambda
let log2 = (message)=> console.log(message)


/*Interface*/
interface Point1{
  x :number,
  y :number
}

let drawPoint = (point:Point1)=>{

}


/*class*/

class Point{

  /*option contstructor
  *
  * constructor(x:number,y:number)*/
constructor(x:number,y:number){
   this.x = x;
  this.y =y;
}
  x:number;
  y:number;
  draw(){
console.log("X: ******************" +this.x)
  }
  getDistance(another:Point){}
}

/*create object of class Point*/

let point = new Point(2,3);
point.x = 12;
point.draw();

/*constructors*/

