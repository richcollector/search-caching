import styled from '@emotion/styled';
import { SearchOutlined } from '@ant-design/icons';

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
