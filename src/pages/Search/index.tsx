import * as S from '../../utils/styles/Search.style';
import SearchBar from '../../components/SearchBar';
import SearchContents from '../../components/SearContents';

export default function SearchPage() {
	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.SearBox>
						<h1>질환명 검색</h1>
						<SearchBar />
						<SearchContents />
					</S.SearBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
