import React, { useState } from "react";

export const Context = React.createContext();

const Store = ({ children }) => {
	const [cycleType, setCycleType] = useState("monthly");
	const [slideValue, setSlideValue] = useState(3);

	return (
		<Context.Provider
			value={{
				cycleType: [cycleType, setCycleType],
				slideValue: [slideValue, setSlideValue],
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Store;
