import React, { useState } from "react";
// 함수형 컴포넌트이지만 리액트 객체 내의 메소드를 사용할거라서 import시켜줘야 함

function FunctionalState() {
	const [message, setMessage] = useState("");
	// 배열형 변수 선언 setMessage는 setState함수..같은거?
	// useState 는 message의 초기값을 매개변수로 넣어주는 것

	const onClickEnter = () => {
		setMessage("안녕하세요~");
	};
	const onClickLeave = () => {
		setMessage("bye");
	};

	return (
		<div>
			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
			<h1>{message}</h1>
		</div>
	);
}

export default FunctionalState;
