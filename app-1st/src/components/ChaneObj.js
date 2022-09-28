import { useState } from "react";

export default function ChangeObj(props) {
	const [index, changeIndex] = useState(0);

	let obj = props.objArr[index]; //pororoobj의 특정 인덱스에 해당하는 object 여기루 들어오게 돼?!
	// 여기가 핵심 줄이구만..

	const onChange = () => {
		if (index === props.objArr.length - 1) {
			changeIndex(0); //index를 바꿀 수 있는 유일한 함수가 changeindex이기 때문에,
		} else {
			changeIndex(index + 1);
		}
		obj = props.objArr[index];
	};
	return (
		<div>
			<h1>이름:{obj.name}</h1>
			<h1>나이:{obj.age}</h1>
			<h1>이름:{obj.nickname}</h1>
			<button onClick={onChange}>프로필 변경하기</button>
		</div>
	);
}
