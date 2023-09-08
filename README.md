## 📚 과제

- 목표
  검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

- 참고자료<br/>
  [assignment-api](https://github.com/walking-sunset/assignment-api)

- 구현목표
  아래 사이트의 검색영역을 클론하기<br/>
  [한국임상정보](https://clinicaltrialskorea.com/)

- 세부목표

  - 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현

    - 검색어가 없을 시 “검색어 없음” 표출

  - API 호출별로 로컬 캐싱 구현

    - 캐싱 기능을 제공하는 라이브러리 사용 금지(React-Query 등)
    - 캐싱을 어떻게 기술했는지에 대한 내용 README에 기술
    - expire time을 구현할 경우 가산점

  - 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

    - README에 전략에 대한 설명 기술

  - API를 호출할 때 마다 console.info("calling api") 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정

  - 키보드만으로 추천 검색어들로 이동 가능하도록 구현
    - 사용법 README에 기술

## 🚀실행 방법

```jsx
$ npm install
$ npm start
```

## 동작 영상

- 검색<br/>
  <img width='600px' src='https://github.com/richcollector/search-caching/assets/104312779/5a9e7b16-59cb-41ef-8cdf-784590d9fdbe' alt='search' />

- 캐싱<br/>
  <img width='600px' src='https://github.com/richcollector/search-caching/assets/104312779/2a4981e4-4161-45ff-9ff3-c52456659762' alt='caching' />

## 🔥 과제 수행 방식

- 검색
  - 디바운싱 (Debouncing) vs 쓰로틀링 (Throttling)
  >디바운싱은 연속적인 이벤트 중 마지막 이벤트 발생 이후 일정 시간(대기 시간)이 지나야 작업이 실행되도록 하는 기술. 예를 들어 검색창에 입력이 있을 때, 디바운싱을 사용하면 사용자가 입력을 완료하기 전까지 API 호출을 지연시킬 수 있어 선택을 하게 되었습니다.
  >```jsx
  >	useEffect(() => {
		if (keyWord === '') {
			dispatch({ type: 'loadIllness', illnessList: [] });
		} else if (keyWord) {
			const timeoutId = setTimeout(() => {
				dispatch({ type: 'requestIllness' });

				CacheRepository.get(keyWord, keyWord).then(cacheData => {
					if (cacheData) {
						dispatch({ type: 'loadIllness', illnessList: cacheData });
					} else if (cacheData === false) {
						getIllness(keyWord).then(response => {
							console.info('api호출');
							CacheRepository.set(keyWord, keyWord, response.data);
							dispatch({ type: 'loadIllness', illnessList: response.data, keyWord });
						});
					}
				});
			}, 500);
			return () => clearTimeout(timeoutId);
		}
	}, [keyWord]);
  >```

- 추천 검색어 이동
- useRef vs useState
> useState를 사용하여 추천검색어 데이터 배열의 index 이동으로 구현하는 법을 선택. 이유는 ref제어를 하게 될 경우 input창과 검색어 창을 제어하게되어 번거롭게 느껴짐. 키보드 이벤트를 이용해 onKeyDown 함수를 구현하여 ArrowUp, ArrowDown, Enter 이벤트별로 이벤트 처리하도록 구현.
> ```jsx
>	const KeyArrow = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'ArrowDown') {
			if (isComposing) return;
			const lastIndex = illnessList.length < 4 ? illnessList.length - 1 : 5;

			if (selectedIndex === lastIndex) {
				return setSelectedIndex(0);
			}

			if (selectedIndex < lastIndex) {
				setSelectedIndex(prev => prev + 1);
			}
		}

		if (event.key === 'ArrowUp') {
			const lastIndex = illnessList.length < 4 ? illnessList.length - 1 : 5;
			if (selectedIndex === 0) {
				return setSelectedIndex(lastIndex);
			} else {
				setSelectedIndex(prev => prev - 1);
			}
		}

		if (event.key === 'Enter') {
			setKeyWord(illnessList[selectedIndex].sickNm);
		}
	};
> ```

- 캐싱
- localStorage vs sessionStorage vs cacheStorage vs state
- 로컬스토리지는 용량에 제한이있어, 대용량 데이터에 부적합하다고 생각하고, 세션스토리지는 브라우저가 사라지면 값이 사라지기때문에 선택을 하지 않았습니다. state 변수는 새로고침 시 변수의 값이 사라져 사용성이 떨어져 캐쉬 스토리지가 용량면에서나 다른 storage들이 가지고 있는 단점을 극복한 방법으로 크롬에서도 추천하는 방법이라 선택을하게 되었습니다. class형태의 interface로 만들어 접근하기 쉽게 만들었습니다.
>```jsx
>export default class CacheIllnessRepository {
	async set(cacheName: string, url: string, illnessList: any) {
		const EXPIRATION_TIME = new Date(Date.now() + ONE_MINUTE);
		const cacheStorage = await caches.open(cacheName);
		const init = {
			headers: {
				'Content-Type': 'application/json, application/json; charset=utf-8',
				'content-length': '2',
				Expires: `${EXPIRATION_TIME}`,
			},
		};
		const clonedResponse = new Response(JSON.stringify(illnessList), init);
		await cacheStorage.put(url, clonedResponse);
		return;
	}

	async get(cacheName: string, url: string) {
		try {
			const cacheStorage = await caches.open(cacheName);
			const cachedResponse = await cacheStorage.match(url);

			if (cachedResponse === undefined) {
				return false;
			}

			return await cachedResponse.json();
		} catch (error) {
			return false;
		}
	}

	async remove() {
		const cacheNames = await caches.keys();
		const currentTime = new Date(Date.now()).getTime();
		for (const cacheName of cacheNames) {
			const cacheStorage = await caches.open(cacheName);
			const cachedResponse = await cacheStorage.match(cacheName);
			const cacheExpirationTime = new Date(cachedResponse?.headers.get('Expires') ?? '').getTime();

			if (cacheExpirationTime < currentTime) {
				await cacheStorage.delete(cacheName);
				console.info(`"${cacheName}" 만료되어 삭제되었습니다.`);
			}
		}
	}
}
>```

## 🔧 기술 스택

### Config

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-FF4088?style=for-the-badge&logo=hugo&logoColor=white">

### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">

### Library

<img src="https://img.shields.io/badge/scss-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>

## ✅ 컨벤션

- 브랜치 형식
  ```jsx
  main | _develop | (_feature / a) | (_feature / b) | (_feature / c);
  ```
- 커밋 컨벤션
  | feat | 새로운 기능을 추가할 경우 |
  | --- | --- |
  | fix | 버그를 고친 경우 |
  | docs | 문서를 수정한 경우 |
  | style | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우 |
  | refactor | 프로덕션 코드 리팩토링 |
  | chore | 기타 변경사항 |
  | test | test 관련한 코드의 추가, 수정한 경우 |
  | design | CSS 등 사용자 UI 디자인 변경 |
  | comment | 필요한 주석 추가 및 변경 |
  | rename | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 |
  | remove | 파일을 삭제하는 작업만 수행한 경우 |
  | !HOTFIX | 급하게 치명적인 버그를 고쳐야하는 경우 |
