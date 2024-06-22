import { StarWars, LoTR } from '../../src/data/data';
import { RazasLoTR } from '../../src/data/interfaces';
import { exercise1, exercise2, exercise3, exercise4 } from '../../src/exercises/array';

const result1 = StarWars.find((character) => character.genero === 'Masculino');
const result2 = StarWars.every((character) => character.malvado);
const result3 = LoTR.some((character) => character.raza === RazasLoTR.Hobbit);
const result4 = LoTR.filter((character) => !character.malvado);

describe('Ejercicios de Array', () => { 

  test('Ejercicio 1: Haz que la función devuelva el primer elemento del array StarWars con género masculino.', () => {         
    expect(exercise1()).toEqualCustom(result1);
  });

  test('Ejercicio 2: Son todos los personajes de StarWars malvados? Devuelve un booleano.', () => {
    expect(exercise2()).toEqualCustom(result2);
  });

  test('Ejercicio 3: Existe algún personaje de LoTR que sea de la raza Hobbit? Devuelve un booleano.', () => {
    expect(exercise3()).toEqualCustom(result3);
  });

  test('Ejercicio 4: Devuelve un array con todos los personajes de LoTR que no malvados.', () => {
    expect(exercise4()).toEqualCustom(result4);
  });
});
