import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Form from "./components/form/Form";
import Card from "./components/card/Card";

function App() {
	return (
		<>
			<div id="app">
				<Form />
				<Card />
			</div>
		</>
	);
}

export default App;
