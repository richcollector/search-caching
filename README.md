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

### 배포 링크

✌️ 개인의 서버에 올린 작업물로 2023년 10월부터는 접속이 불가 할 수 있는 점 양해바랍니다.

[배포 링크 - search-caching]()

### 동작 영상

등록예정

## 🔥 과제 수행 방식

등록예정

## 🔧 기술 스택

등록예정

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
