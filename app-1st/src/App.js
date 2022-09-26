import MainHeader from "./components/MainHeader";
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/ImgComponent";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";

function App() {
	return (
		<div className="App">
			<MainHeader />
			<ClassState />
			<FunctionalState />
			<ImgComponent />
			<BtnToNaver />
		</div>
	);
}

export default App;
