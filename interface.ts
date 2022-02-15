export {}

//when we are having huge object containe many values the it is difficult 
//to specify type in function declaration
function fullname(person: {fname: string, lname:string}) {
    console.log(`full name is ${person.fname} ${person.lname}`)
}

let p = {
    fname: 'Pooja',
    //lname : 'kushwah'
}

//fullname(p)

//So for that the term interface is there in TS:
//We can create interface of object can use that as a type.

interface Person {
    fname : string,
    lname? : string//now it is optional property
}

//So now function defination would be like

function fullnamewithInterface(person: Person) {
    console.log(`full name is ${person.fname} ${person.lname}`)
}


fullnamewithInterface(p)