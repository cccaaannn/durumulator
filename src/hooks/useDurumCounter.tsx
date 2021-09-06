// react
import { useState, useEffect } from 'react';

// utils
import { calculateDurumCount } from '../utils/calculators';

const useDurumCounter = (durumMoney: number, durumCost: number) => {
	// calculates durum count when durum money or durum coast changes

	// durum amount counter
	const [durumCount, setDurumCount] = useState(0);

	// calculates durum count when durumMoney or durumCost changes
	useEffect(() => {
		const durumCount = calculateDurumCount(durumMoney, durumCost);
		setDurumCount(durumCount);
	}, [durumMoney, durumCost]);


	return [durumCount] as const
}

export default useDurumCounter