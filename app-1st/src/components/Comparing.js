import { useState, useRef } from "react";

const Comparing = () => {
	// 화살표함수는 메모리가 좋다 this를 가지지 않음

	// useState의 0의 의미는 뭘까?
	const [countState, setState] = useState(0);
	const countRef = useRef(0);
	let countVar = 0;
	const [render, setRender] = useState(0);

	const countUpState = () => {
		setState(countState + 1);
		console.log("state:", countState);
	};

	const countUpRef = () => {
		countRef.current = countRef.current + 1;
		console.log("ref:", countRef.current);
	};

	const countUpVar = () => {
		countVar += 1;
		console.log("variable: ", countVar);
	};

	const reRender = () => {
		setRender(render + 1); //useState는 이전값과 다른지 확인하고 그 부분만 리랜더링시켜줌
	};

	return (
		<>
			<h1>State:{countState}</h1>
			<h1>Ref: {countRef.current}</h1>
			<h1>Variable : {countVar}</h1>
			<button onClick={countUpState}>State +1</button>
			<button onClick={countUpRef}>Ref +1</button>
			<button onClick={countUpVar}>Variable +1</button>
			<button onClick={reRender}>렌더링!</button>
		</>
	);
};

export default Comparing;
