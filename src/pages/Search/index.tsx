import Search from '../../components/Search';
import CacheIllnessRepository from '../../utils/interface/CacheIllnessRepository';
import { TEN_SECONDS } from '../../utils/constants/constants';
import * as S from '../../utils/styles/Search.style';

export default function SearchPage() {
	const CacheRepository = new CacheIllnessRepository();
	setInterval(CacheRepository.remove, TEN_SECONDS);
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
