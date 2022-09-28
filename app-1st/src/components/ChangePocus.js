import { useState, useRef } from "react";

export default function ChangePocus() {
	const inputOne = useRef();
	const inputTwo = useRef();

	const ChangePocusOne = () => {
		inputOne.current.focus();
	};
	const ChangePocusTwo = () => {
		inputTwo.current.focus();
	};

	return (
		<div>
			<input ref={inputOne}></input>
			<input ref={inputTwo}></input>
			<br />
			<button onClick={ChangePocusOne}>button1</button>
			<button onClick={ChangePocusTwo}>button2</button>
		</div>
	);
}
