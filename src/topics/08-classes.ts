


export class Person {

    constructor( 
        public name: string, 
        private address: string
        ) {}

}


const ironman = new Person('Carles', 'Olleria');

console.log(ironman);