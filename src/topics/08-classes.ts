


export class Person {
    public name:string;
    private address: string;


    constructor() {
        this.name = 'Carles'
        this.address = 'Ollería'
    }

}


const ironman = new Person();

console.log(ironman);