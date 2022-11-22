import { getTechnologies } from '../../src/pruebas-base/array';
describe('Pruebas en array.ts', () => {

  test('Debe retornar un array de strings', () => {
  
    const resp = getTechnologies();
    expect(resp).toEqual(['HTML', 'CSS', 'JavaScript', 'React', 'Angular']);
    expect(resp).toContain('React');
    expect(resp).toEqual(expect.arrayContaining(['HTML', 'CSS', 'JavaScript', 'React', 'Angular']));
  
  })

})