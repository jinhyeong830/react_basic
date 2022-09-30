import styled, { keyframes } from "styled-components";

const AppSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const RootDiv = styled.div`
	text-align: center;
`;

const AppHeader = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
`;

const AppLogo = styled.img`
	width: 40vmin;
	pointer-events: none;
	animation: ${AppSpin} infinite 20s linear;
`;

// 애니메이션 변수 넣을 때 : 백틱 문자 안이기 때문에 ${}로 감싸서
// 변수로 인식할 수 있게 해줘야 함

const MyA = styled.a`
	color: #61dafb;
`;

export default function ReactStyled(props) {
	const { logo } = props;
	return (
		<RootDiv>
			<AppHeader>
				<AppLogo src={logo} alt="app" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<MyA href="http://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</MyA>
			</AppHeader>
		</RootDiv>
	);
}
