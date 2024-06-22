import { StarWars } from '../../src/data/data';
import { exercise1 } from '../../src/exercises/array';

const result1 = StarWars.find((character) => character.genero === 'Masculino');


describe('Ejercicios de Array', () => { 

  test('Ejercicio 1: Haz que la función devuelva el primer elemento del array StarWars con género masculino.', () => {         
    expect(exercise1()).toEqualCustom(result1);
  });

  

});
