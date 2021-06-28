import "./toggle.scss";
import { useContext } from "react";
import { Context } from "../../../helpers/Store";

export const Toggle = () => {
	const { cycleType } = useContext(Context);
	const [cycleTypeState, setCycleTypeState] = cycleType;

	const toggleCycleType = () => {
		if (cycleTypeState === "monthly") {
			setCycleTypeState("yearly");
		} else if (cycleTypeState === "yearly") {
			setCycleTypeState("monthly");
		}
	};

	return (
		<div className="toggle-wrapper">
			<span className="typeTag">Monthly Billing</span>
			<label class="switch">
				<input type="checkbox" onClick={toggleCycleType} />
				<span class="ball round"></span>
			</label>
			<span className={`${cycleTypeState} typeTag`}>Yearly Billing</span>
		</div>
	);
};
