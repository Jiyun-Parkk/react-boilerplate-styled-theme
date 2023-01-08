내가 쓰려고 만드는 리액트 보일러플레이트 템플릿 입니다 :)

## 1. package

- typescript
- react-router react-router-dom
- react-redux
- reduxjs/toolkit
- styled-components
- react-icons
- meterial-ui

## 2. 기본 스타일 세팅

- global.style: reset.css
- style.d.ts: theme type 세팅
- theme.ts: 기본 light / dark 모드

```
style
 ┣ global.style.ts
 ┣ style.d.ts
 ┗ theme.ts
```

## 3. redux store 세팅

- modules: 각 reducer들 관리
- index: 모든 리듀서 가져오기

```
store
 ┣ modules
 ┃ ┣ theme
 ┃ ┃ ┗ index.ts
 ┃ ┗ index.ts
 ┗ index.ts
```
