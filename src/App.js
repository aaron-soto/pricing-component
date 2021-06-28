import Store from "./components/helpers/Store";
import { PricingCard } from "./components/ui/pricing-card/PricingCard";
import bgSvg from "./assets/bg-pattern.svg";
import circleSVG from "./assets/pattern-circles.svg";

import "./sassStyles/_global.scss";

export const App = () => {
	return (
		<Store>
			<div className="body-content">
				<div
					className="wrapper"
					style={{ backgroundImage: `url(${bgSvg})` }}
				></div>
				<div className="container">
					<div className="header">
						<img src={circleSVG} />
						<h2>Simple, traffic-based pricing</h2>
						<p>Sign-up for our 30-day trial. No credit card required. </p>
					</div>
					<PricingCard />
				</div>
			</div>
		</Store>
	);
};
