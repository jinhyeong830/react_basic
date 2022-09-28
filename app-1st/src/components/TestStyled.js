import styled from "styled-components";
// 컴포넌트에 해당하는 스타일은 해당파일에서 전부 사용.

const MyDiv = styled.div`
	background-color: skyblue;
`;

const MyHeading = styled.h1`
	color: blue;
	background-color: lightgray;
`;

const MySpan = styled.span`
	background-color: dodgerblue;
	font-weight: 100;
`;

export default function TestStyled() {
	return (
		<MyDiv>
			<MyHeading>h1태그입니다.</MyHeading>
			<MySpan>span태그입니다.</MySpan>
		</MyDiv>
	);
}
