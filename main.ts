export {}
let mess = 'hello Pooja';
// console.log(mess)
let x: boolean = true;
let y: number =0;
let s: string = 'Pooja'
let n:null = undefined;
let u:undefined = null
let sentence:string = `My name is ${s} 
and I'm new to typescript`
let str:string = null;
let newb:boolean = undefined

//syntax for declaring array:
let l1:number[] = [1,2,3]
let l2: Array<number> = [1,2,3]

let misL : [number,string,number] = [2,'pooja',4]//disadvantage is size is fixed and 
//also sequence is also fixed

enum Color  {red, green, blue}
let c1:Color = Color.green
enum Name  {Pk, GK=8, SK}
let N1:Name = Name.SK
console.log(c1,N1)

//console.log(sentence,n,u)

//any type value, used when we are not sure of type.
let anyValue:any = 'pooja'


/*
Variable type : 
let x = true;
let y =0;
let s = 'str'

these can be defined with the types as well:
let x: boolean = true;
let y: number =0;
let s: string = 'str'
let n: null = null;
let u: undefined = undefined

Why we need types:
1: to avoid setting the wrong values.
2: Itelligence, i.e it will provide/advise the methods related to that type

*****************************************************

Type inference : 
let b= 20;
b=true;

when we initialize the variable at the time of declaration. then typescript infered that variable
that means it assign the type to that variable of type to which the value is assigned
that is static type checking.
 type inference takes place only at initialising variables

Union types:

let multitype : number | boolean;
multitype = 20;
multitype = true;

union of types is usefull when value is not in our control.
eg. api data or user input.

instead of any type union is usefull due to : 
1. union has some restrictions where as any does not have any restriction
2. intellisence any does not provide any intellisecse, whereas union provides
*/


let multitype : number | boolean;
multitype = 20;
//multitype = true;



