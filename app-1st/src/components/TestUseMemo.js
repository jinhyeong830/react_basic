import { useMemo, useState } from "react";

export default function TestUseMemo() {
	const hardCalculate = (number) => {
		console.log("어려운 계산 시작");
		let sum = 0;
		for (let i = 0; i < 1000000001; i++) {
			sum += 1;
		}
		return number + sum;
	};

	const [hardNum, setHardNum] = useState(1);
	// const hardSum = hardCalculate(hardNum);

	const hardSum = useMemo(() => {
		return hardCalculate(hardNum);
	}, [hardNum]); // hardNum 이 변화될 때만

	const easyCalculate = (number) => {
		console.log("쉬운 계산 시작");
		let sum = 100000 + number;
		return sum;
	};

	const [easyNum, setEasyNum] = useState(1);
	const easySum = easyCalculate(easyNum);

	return (
		<>
			<h1>시간이 오래걸리는 계산</h1>
			<input
				type="number"
				value={hardNum}
				onChange={(e) => {
					setHardNum(parseInt(e.target.value));
				}}
			/>
			<span> +100000 ={hardSum}</span>
			<br /> <br />
			<h1>시간이 짧은 계산</h1>
			<input
				type="number"
				value={easyNum}
				onChange={(e) => {
					setEasyNum(parseInt(e.target.value));
				}}
			/>
			<span> +100000 ={easySum}</span>
		</>
	);
}
