import { useState } from "react";

const usePositiveNumberForm = (defaultValue: number = 0, isIntOnly: boolean = false) => {

	const [positiveNumberForm, setPositiveNumberFormInternal] = useState(defaultValue);

	const setPositiveNumberForm = (value: any): void => {
		if (value) {
			if (isIntOnly) {
				value = parseInt(value) as number;
			}
			else {
				value = parseFloat(value) as number;
			}

			// save the value only if it is bigger than 0
			if (value > 0) {
				setPositiveNumberFormInternal(value);
			}
		}
		else {
			setPositiveNumberFormInternal(defaultValue);
		}
	}

	return [positiveNumberForm, setPositiveNumberForm] as const
}

export default usePositiveNumberForm;