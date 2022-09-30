import { useEffect, useState, useRef } from "react";

export default function TestUseEffect() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState("입력해주세요"); //useState의 parameter는 text의 값 을초기화 시켜주는 것
	const inputValue = useRef();

	const onButtonClick = () => {
		console.log("🐰버튼 클릭");
		setCount(count + 1);
	};

	const onInputChange = () => {
		console.log("🎹키보드 입력");
		setText(inputValue.current.value);
	};

	// useEffect 사용
	// parameter 1개 : dependency array 값 x
	// state개수에 상관없이 리렌더링될 때마다 실행됨
	useEffect(() => {
		console.log("⭐🐾 렌더링 할 때 마다 실행되는 useEffect");
	});

	// parameter 2개 : 두번째 인자인 dependency array 에 배열 넣기
	useEffect(() => {
		console.log("🐰🎹useEffect");
	}, [count, text]);

	// parameter 2개 : 두번째 인자인 dependency array 에 빈배열 넣기
	useEffect(() => {
		console.log("🍩최초 렌더링시에만 실행되는 useEffect🍬");
	}, []);

	return (
		<>
			<h1>{count}</h1>
			<button onClick={onButtonClick}>+1 btn</button>
			<br />
			<br />
			<input ref={inputValue} onChange={onInputChange}></input>
			<h1>{text}</h1>
			{/* input tag 내용을 반영해줄 h1 tag */}
		</>
	);
}
