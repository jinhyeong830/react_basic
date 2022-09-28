import { Component } from "react";

class MainHeader extends Component {
	render() {
		const { text, name, href } = this.props; //클래스형은 this.props로 접근해야 함
		return (
			<div>
				<h1>{name}님 반가워요!</h1>
				<a href={href}>{text}</a>
				{/* <h1>text:{props.text}</h1>
			<h1>name:{props.name}</h1>
			<h1>age:{props.age}</h1> */}
				{/* 위에 구조분해할당 식이 없으면 props를 타고 들어와야 함 */}
			</div>
		);
	}
}

export default MainHeader;

// props안에 html에서 전달하게 될 data가 들어가게 됨
// export default function MainHeader(props) {
// 	const { text, name, href } = props;
// 	return (
// 		<div>
// 			<h1>name:{name}</h1>
// 			<a href={href}>{text}</a>
// 			{/* <h1>text:{props.text}</h1>
// 			<h1>name:{props.name}</h1>
// 			<h1>age:{props.age}</h1> */}
// 			{/* 위에 구조분해할당 식이 없으면 props를 타고 들어와야 함 */}
// 		</div>
// 	);
// }
