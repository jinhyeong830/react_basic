import { useState, useRef } from "react";

export default function TestRef() {
	const [text, setText] = useState("안녕하세요");

	// input tag에 치면 값이 여기에 담기게 되어서 event 객체로 전달받을 필요가 없어짐
	const inputValue = useRef();

	// e.target
	/* const onChangeText = (e) => {
		let inputText = e.target.value;
		setText(inputText);
	}; */
	const onChangeText = () => {
		console.log(inputValue);
		let inputText = inputValue.current.value;
		setText(inputText);
	};
	return (
		<div>
			<h1>{text}</h1>
			{/* 변화감지를 확인하기 위해서 event변수로 넘겨줌 USING JS e.target*/}
			{/* <input
				ref={inputValue}
				onChange={(e) => {
					onChangeText(e);
				}}
			></input> */}

			{/* USING  useref*/}
			<input ref={inputValue} onChange={onChangeText}></input>
		</div>
	);
}
