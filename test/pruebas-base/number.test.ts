import {suma} from "../../src/pruebas-base/number";
describe("Pruebas en number.ts", () => {
	test("Debe retornar la suma de dos numeros", () => {
		const result = suma(1, 2);
    expect(result).toBe(3);
	});
	
});
