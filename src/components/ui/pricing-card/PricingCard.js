import "./pricingCard.scss";
import { useState, useContext, useEffect } from "react";
import { Slider } from "./slider/Slider";
import { Toggle } from "./toggle/Toggle";

import { Context } from "../../helpers/Store";

export const PricingCard = () => {
	const { cycleType, slideValue } = useContext(Context);
	const [cycleTypeState, setCycleTypeState] = cycleType;
	const [slideValueState, setSlideValueState] = slideValue;
	const [priceObj, setPriceObj] = useState({});

	const dataObj = [
		{
			pageViews: "10K",
			price: 8,
			priceDisc: 8 - 8 * 0.25,
		},
		{
			pageViews: "50K",
			price: 12,
			priceDisc: 12 - 12 * 0.25,
		},
		{
			pageViews: "100K",
			price: 16,
			priceDisc: 16 - 16 * 0.25,
		},
		{
			pageViews: "500K",
			price: 24,
			priceDisc: 24 - 24 * 0.25,
		},
		{
			pageViews: "1M",
			price: 36,
			priceDisc: 36 - 36 * 0.25,
		},
	];

	//  10K pageviews / $8 per month
	// 50K pageviews / $12 per month
	// 100K pageviews / $16 per month
	// 500k pageviews / $24 per month
	// 1M pageviews / $36 per month

	useEffect(() => {
		setPriceObj(dataObj[slideValueState - 1]);
	}, []);

	useEffect(() => {
		setPriceObj(dataObj[slideValueState - 1]);
	}, [slideValueState]);

	return (
		<div className="pricing-card">
			<div className="plan-details">
				<div className="pricing">
					<p className="page-views">{priceObj?.pageViews} Pageviews</p>
					<p className="pricing-text">
						$
						{cycleTypeState === "monthly"
							? priceObj?.price
							: priceObj?.priceDisc}
						.00 <span>/ month</span>
					</p>
				</div>
			</div>
			<Slider />
			<Toggle />
			<div className="divider"></div>
			<div className="start-trial">
				<ul>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
							<path
								fill="none"
								stroke="#10D8C4"
								stroke-width="2"
								d="M1 4.134l1.907 1.908L7.949 1"
							/>
						</svg>
						Unlimited websites
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
							<path
								fill="none"
								stroke="#10D8C4"
								stroke-width="2"
								d="M1 4.134l1.907 1.908L7.949 1"
							/>
						</svg>
						100% data ownership
					</li>
					<li>
						<svg xmlns="http://www.w3.org/2000/svg" width="9" height="8">
							<path
								fill="none"
								stroke="#10D8C4"
								stroke-width="2"
								d="M1 4.134l1.907 1.908L7.949 1"
							/>
						</svg>
						Email reports
					</li>
				</ul>
				<div className="button">
					<span>Start my trial</span>
				</div>
			</div>
		</div>
	);
};
