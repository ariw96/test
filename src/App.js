import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";

function App() {
	const [price, setPrice] = useState("");
	const [tax, setTax] = useState(0);
	const [maam, setMaam] = useState(17);
	const [totalPrice, setTotalPrice] = useState(0);
	const [safety, setSafety] = useState(true);
	const [electric, setElectric] = useState(true);
	const [safetyDiscount, setSafetyDiscount] = useState(0);
	const [electricDiscount, setElectricDiscount] = useState(0);
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch("https://myfakeapi.com/api/cars/23");
			const data = await result.json();
			let apiPrice = parseInt(data.Car.price.slice(1)) * 200;
			console.log(apiPrice);
			setPrice(apiPrice);
		};
		fetchData();
	}, []);
	const handleSafety = () => {
		setSafety(!safety);
		if (safety) {
			setSafetyDiscount(4000);
		} else {
			setSafetyDiscount(0);
		}
	};
	const handleElectric = () => {
		setElectric(!electric);
		if (electric) {
			setElectricDiscount(0.1);
		} else {
			setElectricDiscount(0);
		}
	};

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	};

	const handleTaxChange = (e) => {
		setTax(e.target.value);
	};
	const handleMaamChange = (e) => {
		setMaam(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (price < 0) {
			alert("Price cannot be negative");
		} else {
			setTotalPrice(
				price * (1 + tax / 100) +
					price * (maam / 100) -
					price * electricDiscount -
					safetyDiscount
			);
		}
	};
	return (
		<>
			<div className="App">
				<div>
					<header className="App-header">
						<form
							onSubmit={(e) => {
								handleSubmit(e);
							}}
						>
							<h3> אנא מלאו את הפרטים </h3>

							<label>מחיר הרכב באתר היצרן</label>
							<br />
							<input
								type="number"
								value={price}
								required
								min="0"
								onChange={(e) => {
									handlePriceChange(e);
								}}
							/>
							<br />
							<div className="tax">
								<div>
									<label>אחוז מע"מ</label>
									<br />
									<input
										className="maam"
										type="number"
										value={maam}
										required
										onChange={(e) => {
											handleMaamChange(e);
										}}
									/>
									<br />
								</div>
								<div>
									<label>אחוז מס רכב בישראל</label>
									<br />
									<input
										type="number"
										value={tax}
										onChange={(e) => {
											handleTaxChange(e);
										}}
									/>
								</div>
							</div>
							<div>
								<label>מערכת בטיחות מותקנת</label>
								<input
									type="checkbox"
									className="safety"
									onChange={handleSafety}
								/>
							</div>
							<div>
								<label>רכב חשמלי</label>
								<input
									type="checkbox"
									className="electric"
									onChange={handleElectric}
								/>
							</div>

							<input type="submit" value="חישוב המחיר" />
						</form>
						<h3> :מחיר הרכב הסופי בישראל</h3>
						<div className="box">{totalPrice}</div>
						<p>
							{price} :המחיר באתר החברה
							<br />
							{price * (1 + maam / 100)} :לאחר מס
							<br />
							{price * (1 + tax / 100)} :לאחר מע"מ
							<br />
							{price - price * electricDiscount} :לאחר הנחה של רכב חשמלי(אם
							קיים)
							<br />
							{price - safetyDiscount} :לאחר הנחה של מערכת בטיחות (אם קיים)
						</p>
					</header>
				</div>
			</div>
			<div>
				<h2>חישוב מחיר רכב</h2>
				<h3>
					בטופס זה תוכל לחשב את מחיר <br />
					הרכב בישראל,על סמך מחירו בחו"ל
				</h3>
				<img
					src={
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_MfocG_Z2rKO5vdDLZ68j4ReSAr94LQ7Fg&usqp=CAU"
					}
				/>
			</div>
		</>
	);
}

export default App;
