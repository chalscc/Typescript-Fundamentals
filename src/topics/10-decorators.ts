// Raramente crearemos nuestros propios decoradores, pero es importante saber que existen y como funcionan
// No son mas que funciones que pueden modificar el comportamiento de clases, metodos o propiedades
function classDecorator<T extends { new(...args:any[]): {}}>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override'
    }
}


@classDecorator
export class SuperClass {
    public myProperty: string = 'ABC123';


    print() {
        console.log('Hola mundo');
    }
}


// Imprimo la definicion de la clase
console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);