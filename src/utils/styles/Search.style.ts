import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 100vw;
	height: 100vh;
`;

export const SearBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	width: 50%;
	height: 70%;

	border: 1px solid #bdbdbd;

	border-radius: 20px;
`;

export const SearcContentsBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;

	width: 90%;
	height: 50%;

	border-radius: 15px;
	background-color: #f5f2fc;
	padding: 20px;
`;

export const SearchRecommedBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	font-size: 14px;

	width: 90%;
	height: 10%;
`;

export const Searchbar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	width: 90%;
	height: 50px;

	border-radius: 15px;
	background-color: #f5f2fc;
	padding: 0px 20px;
`;

export const Search = styled(SearchOutlined)`
	color: #5729ff;
	font-size: 30px;

	cursor: pointer;

	:hover {
		color: red;
	}
`;

export const SearchbarInput = styled.input`
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;

	font-size: 20px;

	margin: 0px 20px;
`;
