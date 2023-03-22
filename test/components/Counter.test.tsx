import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Counter from "../../src/components/Counter/Counter";

describe("Pruebas en <Counter />", () => {
	const initialValue = 10;

	test("Debe hacer match con el snapshot", () => {
		const {container} = render(<Counter value={initialValue} />);

		expect(container).toMatchSnapshot();
	});

	test("Debe Mostrar el Valor inicial de 50", () => {
		render(<Counter value={50} />);

		screen.debug();

		expect(screen.getByText("50")).toBeTruthy();

		expect(screen.getByRole("heading", {level: 2}).innerHTML).toContain("50");
	});

	test("Debe incrementar el valor +1", () => {
		render(<Counter value={initialValue} />);

		const btnIncrement = screen.getByText("+1");

		fireEvent.click(btnIncrement);

		expect(screen.getByText("11")).toBeTruthy();
	});

	test("Debe decrementar el valor -1", () => {
		render(<Counter value={initialValue} />);

		const btnDecrement = screen.getByText("-1");

		fireEvent.click(btnDecrement);

		expect(screen.getByText("9")).toBeTruthy();
	});
});
