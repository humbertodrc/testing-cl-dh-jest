import React from "react";
import {useState} from "react";
import reactLogo from "../../assets/react.svg";

export interface CounterInterface {
	value: number;
}

const Counter: React.FC<CounterInterface> = ({value}) => {
	const [count, setCount] = useState(value);
	return (
		<div className="App">
			<div>
				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
			<h1>Testing React</h1>
			<p>{count}</p>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>+1</button>
				<button onClick={() => setCount((count) => count - 1)}>-1</button>
			</div>
		</div>
	);
};

export default Counter;
