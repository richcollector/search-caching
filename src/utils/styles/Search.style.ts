import styled from '@emotion/styled';

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
