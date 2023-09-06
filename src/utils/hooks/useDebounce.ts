import { useEffect, useReducer } from 'react';
import { getIllness } from '../../api/Api';
import illnessReducer from '../reducer/IllnessReducer';

export default function useDebounce(keyWord: string) {
	const [{ illnessList, isLoading }, dispatch] = useReducer(illnessReducer, {
		illnessList: [],
		isLoading: false,
	});

	useEffect(() => {
		if (keyWord === '') {
			dispatch({ type: 'loadIllness', illnessList: [] });
		} else if (keyWord) {
			const timeoutId = setTimeout(() => {
				dispatch({ type: 'requestIllness' });
				getIllness(keyWord).then(response => {
					console.info('api호출');
					dispatch({ type: 'loadIllness', illnessList: response.data });
				});
			}, 500);
			return () => clearTimeout(timeoutId);
		}
	}, [keyWord]);

	return { illnessList, isLoading };
}
