import { useEffect } from "react";

export default function Timer() {
	// 타이머는 리랜더링될 때마다

	// useEffect 4
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("타이머 실행중");
		}, 1000); //1 초에 한번씩 타이머 실행 중이라는

		// unmount 될 때 실행되는 줄..? line..? return 이하
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<>
			<h1>타이머가 실행중입니다.</h1>
		</>
	);
}
