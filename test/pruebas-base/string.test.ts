import { getSaludo } from '../../src/pruebas-base/string';
describe('Pruebas en string.ts', () => {
    test('getSaludo debe retornar Hola + nombre', () => {
        const nombre = 'Humberto';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

})