import ReactFragment from "./components/ReactFragment";
// import "./App.css";
import TableColumn from "./components/TableColumn";
import Comparing from "./components/Comparing";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import PracticeTimer from "./components/PracticeTimer";
import { useEffect, useRef, useState } from "react";
function App() {
	const [show, setShow] = useState(false);

	const changeFocus = useRef();

	useEffect(() => {
		changeFocus.current.focus();
	}, []);

	return (
		<div className="App">
			{/* 조건부 렌더링 */}
			{show && <PracticeTimer />}
			{/* html컨트롤을.. js로 자유롭게 하고 있군.. */}
			<button ref={changeFocus} onClick={() => setShow(!show)}>
				{show ? "숨기기" : "보이기"}
			</button>
		</div>
	);
}

export default App;
