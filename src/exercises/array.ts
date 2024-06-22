import { StarWars, LoTR } from '../data/data';
import { ILoTR, IStarWars, RazasLoTR } from '../data/interfaces';

// Solo puedes modificar la función exercise-[número].
// No puedes modificar los imports, ni los exports, ni los nombres de las funciones.
// En definitiva, no modifiques el código que está fuera de las funciones que tienes que completar.

// Puedes visualizar tanto este fichero como el de interfaces.
// Usa el comando `npm run test` para ejecutar este ejercicio.

// Ejercicio 1: Haz que la función devuelva el primer elemento del array StarWars con género masculino. Usa un metodo de array.
export const exercise1 = (): IStarWars => {

}

// Ejercicio 2: Son todos los personajes de StarWars malvados? Devuelve un booleano.
// true si todos los personajes son malvados, false si no lo son. Usa un metodo de array.
export const exercise2 = (): boolean => {

}

// Ejercicio 3: Existe algún personaje de LoTR que sea de la raza Hobbit? Devuelve un booleano. Usa un metodo de array.
export const exercise3 = (): boolean => {

}

// Ejercicio 4: Devuelve un array con todos los personajes de LoTR que no malvados. Usa un metodo de array.
export const exercise4 = (): LoTR[] => {

}

// Ejercicio 5: Devuelve el array de StarWars ordenado por edad ASCENDENTE. Usa un metodo de array.
export const exercise5 = (): IStarWars[] => {

}

// Ejercicio 6: Devuelve el array de StarWars ordenado por edad DESCENDENTE. Usa un metodo de array.
export const exercise6 = (): IStarWars[] => {

}

// Ejercicio 7: Devuelve el array de LoTR, pero ahora todos tendran edad: 666. Usa un metodo de array.
export const exercise7 = (): LoTR[] => {

}

// Ejercicio 8: Devuelve un único array con todos los personajes de LoTR y StarWars. Usa un metodo de array sobre Characters.
export const exercise8 = (): (ILoTR | IStarWars)[] => {
  const Characters: [ILoTR[], IStarWars[]] = [LoTR, StarWars];

}

// Ejercicio 9: Devuelve un único array con todos los personajes de LoTR y StarWars. Usa el operador spread.
export const exercise9 = (): (ILoTR | IStarWars)[] => {
  

}