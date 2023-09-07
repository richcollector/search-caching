import React, { useState } from 'react';
import useDebounce from '../../utils/hooks/useDebounce';
import SearchContents from './SearContents';
import * as SearchBar from '../../utils/styles/SearchBar.style';
import * as S from '../../utils/styles/Search.style';

export default function Search() {
	const [keyWord, setKeyWord] = useState('');
	const { illnessList, isLoading } = useDebounce(keyWord);
	const [isComposing, setIsComposing] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const searchKeyWord = (event: React.ChangeEvent<HTMLInputElement>) => {
		setKeyWord(event.currentTarget.value);
	};

	const KeyArrow = (event: React.KeyboardEvent<HTMLInputElement>) => {
		console.log('keyCode', event.keyCode);
		if (event.key === 'ArrowDown') {
			if (isComposing) return;
			const lastIndex = illnessList.length - 1;
			if (selectedIndex === lastIndex) {
				return setSelectedIndex(0);
			}
			if (selectedIndex < lastIndex) {
				setSelectedIndex(prev => prev + 1);
			}
		}
		if (event.key === 'ArrowUp') {
			const lastIndex = illnessList.length - 1;
			if (selectedIndex === 0) {
				return setSelectedIndex(lastIndex);
			} else {
				setSelectedIndex(prev => prev - 1);
			}
		}
	};

	return (
		<>
			<SearchBar.Searchbar>
				<SearchBar.Search />
				<SearchBar.SearchbarInput
					autoFocus
					value={keyWord}
					onChange={searchKeyWord}
					onKeyDown={KeyArrow}
					onCompositionStart={() => setIsComposing(true)}
					onCompositionEnd={() => setIsComposing(false)}
				/>
			</SearchBar.Searchbar>
			{checkList(illnessList, keyWord, isLoading, selectedIndex)}
		</>
	);
}

function checkList(illnessList: any, keyWord: string, isLoading: boolean, selectedIndex: number) {
	const existList = illnessList.length;

	switch (existList) {
		case 0: {
			return (
				<S.SearcContentsBox style={{ justifyContent: 'center' }}>
					{keyWord ? '검색어를 입력해주세요' : '검색된 내용이 없습니다.'}
				</S.SearcContentsBox>
			);
		}

		default: {
			return (
				<S.SearcContentsBox>
					<S.SearchRecommedBox>추천 검색어</S.SearchRecommedBox>
					{isLoading ? (
						<h1>...Loading</h1>
					) : (
						<SearchContents illnessList={illnessList} selectedIndex={selectedIndex} />
					)}
				</S.SearcContentsBox>
			);
		}
	}
}
