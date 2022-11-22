import {createUser} from "../../src/pruebas-base/error";
describe("Pruebas en error.ts", () => {
	const result = createUser("Juan");

	test("Debe retornar un objeto", () => {
		expect(result).toMatchObject({
			userName: "Juan",
		});
	});

	test("Debe retornar un error si el nombre de usuario es invalido", () => {
		expect(() => {
			createUser("");
    }).toThrow();
    
    try {
      const result = createUser("");
      throw new Error("No se lanzo el error");
    } catch (error) {
      expect(error.message).toBe("El nombre de usuario es obligatorio");
    }
  });
  
});
