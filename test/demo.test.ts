describe("Pruebas en Demo", () => {
	test("Esta prueba no debe fallar", () => {
		// Arrange
		const saludo = "Hola Mundo";

		// Act
		const saludo2 = saludo.trim();

		// Assert
		expect(saludo2).toBe(saludo);
	});
});
