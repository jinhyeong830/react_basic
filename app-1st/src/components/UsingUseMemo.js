import { useEffect, useMemo, useState } from "react";

export default function UsingUseMemo() {
	// 숫자증감과 isKorea는 독립적으로 이루어지려면
	// isKorea에 대해서(객체)는 useMemo를 사용해야 한다!!
	const [number, setNumber] = useState(0);
	const [isKorea, setIsKorea] = useState(true);

	const location = useMemo(() => {
		return {
			where: isKorea ? "한국" : " 외국",
		};
	}, [isKorea]);

	// const location = { where: isKorea ? "한국" : "외국" };
	// useeffect가 죽었다 깨어나도 못하는 기능을
	// usememo는 할 수 있대우

	// object는 값이 아닌 시작 메모리 주소를 저장하고 있어서
	// 객체는 리렌더링 될 떄마다 다른 메모리 주소를 가지게 될 것
	// 같은 값의 오브젝트여도 비교하면 다르다고 나오니까 계속 다르다고 판단할 것
	// 객체에 대해서 useEffect를 사용하는 것은 적절하지 않은 방법이기 때문에
	// object는 useMemo를 써주면 됩니다

	useEffect(() => {
		console.log("✈️ useEffect 호출");
	}, [location]);
	// location의 변화가 있을때만 useEffect호출할 것
	// 객체일땐,,

	return (
		<>
			<h1>숫자 증감</h1>
			<input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
			<br />
			<br />
			<h1>where are you?</h1>
			<h2>location : {location.where}</h2>
			{/* setState를 바로 불러오면 무한 렌더링이 되기 때문에, 익명함수로 불러준다. */}
			<button onClick={() => setIsKorea(!isKorea)}> 나라변경</button>
		</>
	);
}
