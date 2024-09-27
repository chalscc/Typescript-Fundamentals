import { StarWars, LoTR, Motos, Coches } from '../../src/data/data';
import { RazasLoTR } from '../../src/data/interfaces';
import { exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8, exercise9 } from '../../src/exercises/01-array';

const result1 = StarWars.find((character) => character.genero === 'Masculino' && character.edad < 20);
const result2 = LoTR.every((character) => character.malvado);
const result3 = LoTR.some((character) => character.raza === RazasLoTR.Hobbit);
const result4 = LoTR.filter((character) => !character.malvado);
const result5 = StarWars.sort((a, b) => a.edad - b.edad)
const result6 = StarWars.sort((a, b) => a.edad - b.edad).reverse();
const result7 = LoTR.map((character) => ( { ...character, edad: 666 }));
const result8 = [Motos, Coches].flat();
const result9 = [...Motos, ...Coches];

describe('Ejercicios de Array', () => { 

  test('Ejercicio 1: Haz que la función devuelva el primer elemento del array StarWars con género masculino.', () => {         
    expect(exercise1()).toEqualCustom(result1);
  });

  test('Ejercicio 2: Son todos los personajes de LoTR malvados? Devuelve un booleano.', () => {
    expect(exercise2()).toEqualCustom(result2);
  });

  test('Ejercicio 3: Existe algún personaje de LoTR que sea de la raza Hobbit? Devuelve un booleano.', () => {
    expect(exercise3()).toEqualCustom(result3);
  });

  test('Ejercicio 4: Devuelve un array con todos los personajes de LoTR que no malvados.', () => {
    expect(exercise4()).toEqualCustom(result4);
  });

  test('Ejercicio 5: Devuelve el array de StarWars ordenado por edad ASCENDENTE. Usa un metodo de array.', () => {
    expect(exercise5()).toEqualCustom(result5);
  });

  test('Ejercicio 6: Devuelve el array de StarWars ordenado por nombre DESCENDENTE. Usa un metodo de array.', () => {
    expect(exercise6()).toEqualCustom(result6);
  });

  test('Ejercicio 7: Devuelve el array de LoTR, pero ahora todos tendran edad: 666. Usa un metodo de array.', () => {
    expect(exercise7()).toEqualCustom(result7);
  });

  test('Ejercicio 8: Devuelve un único array con todos las Motos y los Coches (Primero Motos y despues Coches). Usa un metodo de array sobre Characters.', () => {
    expect(exercise8()).toEqualCustom(result8);
  });

  test('Ejercicio 9: Devuelve un único array con todos las Motos y los Coches (Primero Motos y despues Coches). Usa el operador spread.', () => {
    expect(exercise9()).toEqualCustom(result9);
  });
});
