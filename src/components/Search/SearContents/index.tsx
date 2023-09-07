import * as S from '../../../utils/styles/SearchContents.style';

interface IProps {
	illnessList: any;
	selectedIndex: number;
}

export default function SearchContents({ illnessList, selectedIndex }: any) {
	return (
		<>
			{illnessList.slice(0, 5).map((illness: any, index: number) => (
				<S.SearcContents
					key={illness.sickCd}
					style={{ color: selectedIndex === index ? 'blue' : '' }}
				>
					<S.Search />
					{illness.sickNm}
				</S.SearcContents>
			))}
		</>
	);
}
