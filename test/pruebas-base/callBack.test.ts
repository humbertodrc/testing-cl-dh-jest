import { reverseCallBack, reverseString } from '../../src/pruebas-base/callBack';
describe('Pruebas en el archivo de callBack', () => {

  test('Debe retornar un string al revés', () => {
  
    const str = 'Hola Mundo';
    const strReverse = reverseCallBack(str, reverseString);

    // console.log(strReverse);
  
    expect(strReverse).toBe('odnuM aloH');
  
  })

})