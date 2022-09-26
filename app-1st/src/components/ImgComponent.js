import React from "react";
import dogImg from "../dog.jpg";

/* 함수형 component */
/* function ImgComponent() {
	// return <img src="src/diagonalley.jpg" alt="경로" />;
	return <img src={dogImg} alt="강아지" />;
} */

/* class Component */
class ImgComponent extends React.Component {
	render() {
		return <img src={dogImg} alt="강아지" />;
	}
}

export default ImgComponent;
