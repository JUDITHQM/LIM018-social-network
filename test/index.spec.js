// importamos la funcion que vamos a testear
import { addDoc } from '../src/components/firebase/firebaseconfig.js';
jest.mock('../src/components/firebase/firebaseconfig.js') ;
describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
