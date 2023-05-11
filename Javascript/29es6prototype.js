class geo{
    constructor(){
        this.lat = 43.22;
        this.long = 32.98
    }

}

class language extends geo{
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    greet = () => {return `Say Hi To ${this.name}`}

}

var French = new language('French','France')

French
language {lat: 43.22, long: 32.98, name: 'French', country: 'France', greet: ƒ}
// [[Prototype]]: geo
// constructor: class language
// [[Prototype]]: Object


-------------------------
class robot{
    constructor(name,city){
    this.name = name;
    this.city = city;}
}

class human extends robot{
    constructor(name,country){
        super()
    this.name = name;
    this.age = 10;
    this.city = "Gandhinagar";
    this.country = country;}
    greet = () => {return `Say Hi To ${this.name}`}
}
undefined
var Veer = new human('Veer','Gujarat')
undefined
Veer
human {name: 'Veer', city: 'Gandhinagar', age: 10, country: 'Gujarat', greet: ƒ}age: 10city: "Gandhinagar"country: "Gujarat"greet: () => {return `Say Hi To ${this.name}`}length: 0name: "greet"arguments: (...)caller: (...)[[FunctionLocation]]: VM2025:14[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]name: "Veer"[[Prototype]]: robotconstructor: class humanlength: 2name: "human"prototype: robotconstructor: class human[[Prototype]]: Objectarguments: (...)caller: (...)[[FunctionLocation]]: VM2025:8[[Prototype]]: class robot[[Scopes]]: Scopes[2][[Prototype]]: Object
human.prototype = new robot('Veer','Mumbai')
robot {name: 'Veer', city: 'Mumbai'}


-----------------------------


// function human(name,city){
//     this.name = name;
//     this.city = city;
// }

// function robot(name,country){
//     this.name = name;
//     this.age = 10;
//     this.country = country;
// }

// var Anand = new human('Anand','Venice')
// Anand
// human {name: 'Anand', city: 'Venice'}

// human.prototype = new robot('Anand','France')
// robot {name: 'Anand', age: 10, country: 'France'}

// var Anand = new human('Anand','Paris')
// Anand
// human {name: 'Anand', city: 'Paris'}
// Anand.country
// 'France'
// Anand.age
// 10