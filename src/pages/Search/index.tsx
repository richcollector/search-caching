import Search from '../../components/Search';
import * as S from '../../utils/styles/Search.style';

export default function SearchPage() {
	return (
		<>
			<S.Container>
				<S.Wrapper>
					<S.SearBox>
						<h1>질환명 검색</h1>
						<Search />
					</S.SearBox>
				</S.Wrapper>
			</S.Container>
		</>
	);
}
