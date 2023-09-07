import { useEffect, useReducer } from 'react';
import illnessReducer from '../reducer/IllnessReducer';
import { getIllness } from '../../api/Api';

export default function useIllnessList(keyWord: string) {
	const [{ illnessList, isLoading }, dispatch] = useReducer(illnessReducer, {
		illnessList: [],
		isLoading: false,
	});

	useEffect(() => {
		dispatch({ type: 'requestIllness' });

		getIllness(keyWord).then(response => {
			console.log('dd', response.data);
			dispatch({ type: 'loadIllness', illnessList: response.data });
		});
	}, []);

	return { illnessList, isLoading };
}
