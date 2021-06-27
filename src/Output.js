import React from 'react'
import "./Output.css";
function Output(props) {
	return (
		<div className="outputcontainer">
		<div className="output">
				<h1>Output detected frames</h1>
		</div>
			
			<div className="showFrame">
				<p className="images">{props.image}</p>
			</div>
		</div>
	)
}

export default Output