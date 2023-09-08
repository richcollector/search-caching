import { useEffect, useReducer } from 'react';
import { getIllness } from '../../api/Api';
import CacheIllnessRepository from '../interface/CacheIllnessRepository';
import illnessReducer from '../reducer/IllnessReducer';

export default function useDebounce(keyWord: string) {
	const CacheRepository = new CacheIllnessRepository();
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

				CacheRepository.get(keyWord, keyWord).then(cacheData => {
					if (cacheData) {
						dispatch({ type: 'loadIllness', illnessList: cacheData });
					} else if (cacheData === false) {
						getIllness(keyWord).then(response => {
							console.info('api호출');
							CacheRepository.set(keyWord, keyWord, response.data);
							dispatch({ type: 'loadIllness', illnessList: response.data, keyWord });
						});
					}
				});
			}, 500);
			return () => clearTimeout(timeoutId);
		}
	}, [keyWord]);

	return { illnessList, isLoading };
}
