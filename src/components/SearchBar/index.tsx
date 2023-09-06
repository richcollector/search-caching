import React from 'react';
import * as S from '../../utils/styles/SearchBar.style';

interface IProps {
	keyWord: string;
	setKeyWord: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ keyWord, setKeyWord }: IProps) {
	const searchKeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setKeyWord(event.currentTarget.value);
	};

	return (
		<>
			<S.Searchbar>
				<S.Search />
				<S.SearchbarInput value={keyWord} onChange={searchKeyWord} />
			</S.Searchbar>
		</>
	);
}
