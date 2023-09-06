import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import useDebounce from '../../utils/hooks/useDebounce';
import SearchContents from '../../components/SearContents';
import * as S from '../../utils/styles/Search.style';

export default function SearchPage() {
	const [keyWord, setKeyWord] = useState('');
	const { illnessList, isLoading } = useDebounce(keyWord);

	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.SearBox>
						<h1>질환명 검색</h1>
						<SearchBar keyWord={keyWord} setKeyWord={setKeyWord} />

						{checkList(illnessList) ? (
							<S.SearcContentsBox>
								<S.SearchRecommedBox>추천 검색어</S.SearchRecommedBox>
								{isLoading ? (
									<h1>...Loading</h1>
								) : (
									<>
										{illnessList.slice(0, 5).map((illness: any) => (
											<SearchContents key={illness.sickCd} illness={illness.sickNm} />
										))}
									</>
								)}
							</S.SearcContentsBox>
						) : (
							<S.SearcContentsBox style={{ justifyContent: 'center' }}>
								{checkKeyword(keyWord) ? '검색어를 입력해주세요' : '검색된 내용이 없습니다.'}
							</S.SearcContentsBox>
						)}
					</S.SearBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}

function checkList(illnessList: any) {
	return illnessList.length !== 0;
}

function checkKeyword(keyWord: string) {
	return keyWord === '';
}
