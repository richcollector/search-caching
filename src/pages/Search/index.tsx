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
						{illnessList.length ? (
							<>
								<S.SearcContentsBox>
									<S.SearchRecommedBox>추천 검색어</S.SearchRecommedBox>
									{illnessList.map((illness: any) => (
										<SearchContents key={illness.sickCd} illness={illness.sickNm} />
									))}
								</S.SearcContentsBox>
							</>
						) : (
							<>
								<S.SearcContentsBox>검색된 내용이 없습니다.</S.SearcContentsBox>
							</>
						)}
					</S.SearBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
