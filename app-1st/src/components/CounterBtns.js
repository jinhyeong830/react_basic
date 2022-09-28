import { useState } from "react";

export default function CounterBtns() {
	const [count, setCount] = useState(0);

	const plusCount = () => {
		setCount(count + 1);
		// console.log(count + 1);
	};
	const minusCount = () => {
		setCount(count - 1);
		// console.log(count - 1);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={plusCount}>+1</button>
			<button onClick={minusCount}>-1</button>
		</div>
	);
}
