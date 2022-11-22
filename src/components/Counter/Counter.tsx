import React from "react";
import {useState} from "react";

export interface CounterInterface {
	value: number;
}

const Counter: React.FC<CounterInterface> = ({value}) => {
	const [count, setCount] = useState(value);
	return (
		<div className="App">
			<h1>Testing React</h1>
			<h2 data-aria="number">{count}</h2>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>+1</button>
				<button onClick={() => setCount((count) => count - 1)}>-1</button>
			</div>
		</div>
	);
};

export default Counter;
