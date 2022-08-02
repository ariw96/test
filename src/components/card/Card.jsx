import React from "react";
import "./card.css";

function Card() {
	return (
		<div>
			<div className="card">
				<h1>חישוב מחיר רכב</h1>
				<h2>
					בטופס זה תוכל לחשב את מחיר
					<br />
					הרכב בישראל,על סמך מחירו בחו"ל
				</h2>
				<img
					src={
						"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_MfocG_Z2rKO5vdDLZ68j4ReSAr94LQ7Fg&usqp=CAU"
					}
				/>
			</div>
		</div>
	);
}

export default Card;
