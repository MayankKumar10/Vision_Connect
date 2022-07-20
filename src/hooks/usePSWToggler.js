import { useState } from "react";

export const usePSWToggler = () =>{
  const [togglePSW, setTogglePSW] = useState({
		type: "password",
		class: "fa-eye-slash",
	});
	const PSWToggler = () => {
		togglePSW.type === "password"
			? setTogglePSW({ type: "text", class: "fa-eye" })
			: setTogglePSW({ type: "password", class: "fa-eye-slash" });
	};

	return { togglePSW, PSWToggler }; 
}