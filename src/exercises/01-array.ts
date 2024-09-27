import { StarWars, LoTR, Motos, Coches } from '../data/data';
import { ICoches, ILoTR, IMotos, IStarWars, RazasLoTR } from '../data/interfaces';

// Solo puedes modificar la función exercise-[número].
// No puedes modificar los imports, ni los exports, ni los nombres de las funciones.
// En definitiva, no modifiques el código que está fuera de las funciones que tienes que completar.

// Puedes visualizar tanto este fichero como el de interfaces.
// Usa el comando `npm run test` para ejecutar este ejercicio.

// Ejercicio 1: Haz que la función devuelva el primer elemento del array StarWars con género masculino y edad menor a 20 años. Usa un metodo de array.
export const exercise1 = (): IStarWars | undefined => {
  return StarWars.find((character) => character.genero === 'Masculino' && character.edad < 20);
}

// Ejercicio 2: Son todos los personajes de LoTR malvados? Devuelve un booleano.
// true si todos los personajes son malvados, false si no lo son. Usa un metodo de array.
export const exercise2 = (): boolean => {
  return LoTR.every((character) => character.malvado);
}

// Ejercicio 3: Existe algún personaje de LoTR que sea de la raza Hobbit? Devuelve un booleano. Usa un metodo de array.
export const exercise3 = (): boolean => {
  return LoTR.some((character) => character.raza === RazasLoTR.Hobbit);
}

// Ejercicio 4: Devuelve un array con todos los personajes de LoTR que no malvados. Usa un metodo de array.
export const exercise4 = (): ILoTR[] => {
  return LoTR.filter((character) => !character.malvado);
}

// Ejercicio 5: Devuelve el array de StarWars ordenado por edad ASCENDENTE. Usa un metodo de array.
export const exercise5 = (): IStarWars[] => {
  return StarWars.sort((a, b) => a.edad - b.edad)
}

// Ejercicio 6: Devuelve el array de StarWars ordenado por edad DESCENDENTE. Usa un metodo de array.
export const exercise6 = (): IStarWars[] => {
  return StarWars.sort((a, b) => a.edad - b.edad).reverse();
}

// Ejercicio 7: Devuelve el array de LoTR, pero ahora todos tendran edad: 666. Usa un metodo de array.
export const exercise7 = (): ILoTR[] => {
  return LoTR.map((character) => ( { ...character, edad: 666 }));
}

// Ejercicio 8: Devuelve un único array con todos las Motos y los Coches (Primero Motos y despues Coches). Usa un metodo de array sobre Characters.
export const exercise8 = (): (IMotos | ICoches)[] => {
  const Vehiculos: [IMotos[], ICoches[]] = [Motos, Coches];
  return Vehiculos.flat();
}

// Ejercicio 9: Devuelve un único array con todos las Motos y los Coches (Primero Motos y despues Coches). Usa el operador spread.
export const exercise9 = (): (IMotos | ICoches)[] => {
  return [...Motos, ...Coches];
}