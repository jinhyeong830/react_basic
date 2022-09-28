export default function CustomList(props) {
	return (
		<ul>
			{/* el을 활용해서 배열의 값들을 모두 list로 만들어줌*/}
			{props.arr.map((el) => {
				return <li>{el}</li>;
			})}
		</ul>
	);
}
