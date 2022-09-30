import logo from "./logo.svg";
import ReactStyled from "./components/ReactStyled";
import ConditionalRender from "./components/ConditionalRender";
import React, { useState } from "react";
import PracticeOne from "./components/PracticeOne";
import PracticeTwo from "./components/PracticeTwo";
import TestRef from "./components/TestRef";
import ChangePocus from "./components/ChangePocus";

function App() {
	/* 조건부 렌더링 1 */
	// condition의 state값에 따라서 conditional render를 보여줄지 말지 결정
	/* const [condition, setCondition] = useState("보이기");

	const onChange = () => {
		condition === "보이기" ? setCondition("감추기") : setCondition("보이기");
	};

	const conditionRender = condition === "감추기" && <ConditionalRender />; */

	// return
	// 	<div className="App">
	// 		{/* 감추기일때는 보여야 */}
	// 		{conditionRender}
	// 		<button onClick={onChange}>{condition}</button>
	// 	</div>

	/* 조건부 렌더링 2  : props 까지 추가해서!*/

	// const [condition, setCondition] = useState("1번");

	// const componentChange = () => {
	// 	condition === "1번" ? setCondition("2번") : setCondition("1번");
	// };

	// return (
	// 	<div className="App">
	// 		{condition == "1번" ? <PracticeOne text={condition} /> : <PracticeTwo text={condition} />}
	// 		<button onClick={componentChange}>{condition}</button>
	// 	</div>
	// );

	return (
		<div className="App">
			<TestRef />
			<br />
			<ChangePocus />
		</div>
	);
}

export default App;
