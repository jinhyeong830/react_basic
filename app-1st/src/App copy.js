import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";
import StatePractice from "./components/StatePractice";
import CounterBtns from "./components/CounterBtns";
import MainHeader from "./components/MainHeader";
import CustomList from "./components/CustomList";
import CustomObject from "./components/CustonObject";
import ChangeObj from "./components/ChaneObj";
import TestCss from "./components/TestCss";
import TestStyled from "./components/TestStyled";

function App() {
	const nameArr = ["pororo", "crong", "loopy"];

	const pororoobj = [
		{
			name: "pororo",
			age: 6,
			nickname: "사고뭉치",
		},
		{
			name: "loopg-y",
			age: 4,
			nickname: "공주님",
		},
		{
			name: "crong",
			age: 5,
			nickname: "장난꾸러기",
		},
	];
	return (
		<div className="App">
			{/* <ClassState />
			<FunctionalState />
			<ImgComponent />
			<BtnToNaver />
			<StatePractice />
			<CounterBtns />
			<MainHeader text="하이루" />
			<MainHeader text="go to naver" name="뽀로로" href="https://www.naver.com" />
			<CustomList arr={nameArr} /> */}
			{/* arr=nameArr로 바로 쓰면 안되고 jsx 문법으로 인해 {}로 묶어줘야 함 */}
			{/* <ChangeObj objArr={pororoobj} /> */}
			{/* 객체로 전달하는 방법 위에서 전역적으로 객체 선언 후 전달*/}
			{/* <TestCss /> */}
			{/* <TestStyled /> */}
		</div>
	);
}

export default App;
