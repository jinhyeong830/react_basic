import { useState } from "react";

export default function CustomObject(props) {
	const { name, age, nickname } = props.obj;

	return (
		<div>
			<h1>이름:{name}</h1>
			<h1>나이:{age}</h1>
			<h1>별명:{nickname}</h1>
			<button>프로필 변경하기</button>
		</div>
	);
}
