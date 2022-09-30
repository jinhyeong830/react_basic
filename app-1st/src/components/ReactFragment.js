import React from "react";

export default function ReactFragment() {
	return (
		// 무의미한 div요소의 중첩을 막고 싶으면 div가 아닌<React.Fragment>로 대체해서 사용하면
		// 브라우저 상에서 React.Fragment 태그는 보이지 않음
		// 너무 길쥐? <React.Fragment></React.Fragment> 대신 <></>을 쓸 수 있음
		// 빈태그는 심지어 import React from "react"를 안해줘도 됨
		// 그러면 <React.Fragment></ReactFragment>는 언제쓰지?? 속성값을 지정하고 싶을때!

		<>
			<h1>하이</h1>
			<span>hello</span>
		</>
	);
}
