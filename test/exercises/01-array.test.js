import { StarWars } from '../../src/data/data';
import { exercise1 } from '../../src/exercises/array';

describe('Ejercicios de Array', () => { 

    test('Ejercicio 1: Haz que la función devuelva el primer elemento del array StarWars que con género masculino.', () => { 
        
      const result = StarWars.find((character) => character.genero === 'Masculino');      

      expect(exercise1()).toEqual(result);
     })

 })