import { SearchOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

export const SearcContents = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	width: 90%;
	height: 20%;

	font-size: 20px;

	cursor: pointer;

	:hover {
		color: blue;
	}
`;

export const Search = styled(SearchOutlined)`
	font-size: 20px;
	margin-right: 10px;
`;
