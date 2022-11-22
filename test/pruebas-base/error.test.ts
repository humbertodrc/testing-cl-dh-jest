import {createUser} from "../../src/pruebas-base/error";
describe('Pruebas en error.ts', () => {

	const user = createUser('Humberto');

	test('Debe retornar un usuario si el nombre existe', () => {
		expect(user).toMatchObject({
			userName: 'Humberto'
		})

		expect(user).toHaveProperty('userName', 'Humberto');
	
	})

	test('Debe retornar un error si el nombre no existe', () => {
	
		expect(() => {
			createUser('');
		}).toThrow('El nombre de usuario es obligatorio');
	
	
	})

})
