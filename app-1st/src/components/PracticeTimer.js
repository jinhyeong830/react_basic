// useState, useRef, 조건부렌더링 , useEffect까지 사용해야함.....
// 시작은useRef로 구현

import { useEffect, useRef, useState } from "react";

export default function PracticeTimer() {
	const [render, setRender] = useState(0);
	const time = useRef(0);
	const changeFocus = useRef();

	useEffect(() => {
		const timer = setInterval(() => {
			time.current += 1; //!!
			console.log(time.current);
		}, 1000);

		changeFocus.current.focus();

		return () => {
			// setIntervel 을 끄는 법..
			clearInterval(timer);
			console.log("timer is broken!");
		};
	}, []);

	// useRef 사용
	const showTime = () => {
		setRender(render + 1);
		// let timeRefCurrent = timeRef.current; //undefined..
		// console.log(timeRefCurrent);
	};
	return (
		<>
			<h1>{time.current}</h1>

			{/* 시간버튼을 눌렀을때 useRef적용되도록 */}
			<button ref={changeFocus} onClick={showTime}>
				시간
			</button>
		</>
	);
}
