import { useState } from "react"; //state를 사용하기 위해서

// function은 파일이름이랑 동일해야 한다.
// 앞에 export default를 추가해주면 나중에 모듈로서 빼주지 않아도 됨
export default function StatePractice() {
	const [message, setMessage] = useState(""); //초기값을 useState값으로 할당
	const onClickEnter = () => {
		// 메시지를 바꿔야하면 setMessage를 이용해서
		setMessage("안녕하세요");
	};
	// {/* react에서의 속성(?)은 항상 camelcase로 써줘야 함 */}
	// {/* 변수나 함수를 넣고 싶을 때는 {}중괄호를 쓴 후 넣어줘야 함 */}

	const onClickLeave = () => {
		setMessage("안녕히 가세요");
	};
	return (
		<div>
			<h1>{message}</h1>

			<button onClick={onClickEnter}>입장</button>
			<button onClick={onClickLeave}>퇴장</button>
		</div> //컴포넌트는 하나의 요소라서(?) 하나의 div가 감싸줘야 함, div가 아니더라도.. 감싸줘야 함!
	);
}
