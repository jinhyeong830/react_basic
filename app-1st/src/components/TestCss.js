import "../style/TestCss.scss";
/* 
인라인 스타일 방법
const divStyle = {
	backgroundColor: "orange",
};

const headingStyle = {
	color: "red",
};

const spanStyle = {
	backgroundColor: "pink",
	fontWeight: 700,
}; */

export default function TestCss() {
	return (
		<div className="component-root">
			{/* <h1 style={headingStyle}>인라인 방법으로 CSS 적용하기</h1>
			<span style={spanStyle}>this is a span tag!</span> */}
			<h1>h1 tag</h1>
			<span>this is a span tag!</span>
		</div>
	);
}
