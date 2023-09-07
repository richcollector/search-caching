import axios from 'axios';
import { ROUTES } from '../utils/constants/constants';

const instance = axios.create({
	baseURL: `${ROUTES.ILLNESS_URL}`,
});

export const getIllness = async (keyWord: string) => {
	const response = await instance.get(`?q=${keyWord}`);
	return response;
};
