import * as S from '../../utils/styles/SearchContents.style';

export default function SearchContents({ illness }: any) {
	return (
		<>
			<S.SearcContents>
				<S.Search />
				{illness}
			</S.SearcContents>
		</>
	);
}
