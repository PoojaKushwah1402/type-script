

class Employee {
    private eName : string; // cannot use outside the class or subclass.
    work : string;
    protected edu : string //cannot use outside class but can use subclass


    constructor(name: string, edu: string, wrk:string) {
        this.eName = name;
        this.edu = edu,
        this.work = wrk
    }

    greet() {
        console.log(`Hello I'm ${this.eName}`)
        console.log(`Hello I'm doing work ${this.work}`)
        console.log(`Hello my edu is : ${this.edu}`)
    }
}

let e1 = new Employee('Pooja','be','engg');
//console.log(e1.eName)  cannot use as this is private
e1.greet()

///Access Modifiers 
//Public - free accessiblity
//Protected -  within class and subclass
//private - within class

//By default every member is public

class Mananger extends Employee {
    constructor(mname: string, edu:string, wrk:string){
        super(mname,edu,wrk)
    }

    workSummry() {
        console.log(`you are doing great work with work : ${this.edu} and edu : ${this.edu}`)
    }
}

let m1 = new Mananger('Pooja','be','engg');
//console.log(e1.eName)  cannot use as this is private
m1.greet()
m1.workSummry();
console.log(m1.work)
//console.log(m1.edu) cannot use as protected