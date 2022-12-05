# 깃허브 주의사항

- 본인 파트 아닌 파일은 수정 X
- jsx파일, css파일, class명, id명 등은 팀 내부 규칙에 따라 작성
- 충돌의 여지가 있거나, 충돌이 발생하였을 시 단톡방 혹은 조장에게 곧바로 알리기

## 공통 체크리스트 (22.12.04)

<!--1. 라우터 outlet 적용 안됨 -> '라우터 합치기' 및 'Navbar 사용'에 차질 생기므로 우선적으로 확인 필요-->
1. api 페이지 안 열림 -> 조장 노트북에서만 안 열리는 것일 수도 있으므로 확인 필요
2. nav-bar, 로그인 & 회원가입 페이지 만들기
3. 업체 조사
4. 카카오맵 주변 업체 마커 표시
5. sql 로그인, 회원가입 구현하기
6. 세부 css 디자인 및 media query 레이아웃 작성
7. DataContext의 데이터를 어떻게 보관, 정리할지 정하기 (DataContext에 짱박아두기, json으로 변환..?)

## 개인 체크리스트 (22.12.04. 17:08 by 진혜)

### `진희`
1. slick 자동으로 넘어감(mac으로 스크롤 햇을 시) 확인
2. scroll 움직이는 화살표 위치 재설정(노트북 화면으로 봤을 시 브라우저 화면 크기를 줄여야 아래에서 확인 가능했음)

### `진혜`
1. api 확인
2. Estimation css 재정리
3. Estimation 코드 정리 (ex- mbti에서 따온 EST..etc의 명칭 변경 등)

### `현주`
1. slick 자동으로 넘어감(mac으로 스크롤 햇을 시) 확인
2. Portfolio의 각 명함들을 map으로 출력할 수 있는지 확인하고, 각각 Product페이지를 버튼 추가하여 onclick으로 연결하기
3. Portfolio의 각 명함들 중 가장 앞에 나온 명함을 제외한 뒤쪽 명함들의  opactiy 조절

### `일윤`
1. Estimation css 재정리
2. Estimation 코드 정리 (ex- mbti에서 따온 EST..etc의 명칭 변경 등)

### `회윤`
1. 카카오맵 api 라우터 확인
2. 카카오맵 api 주변 업체 마커 표시 넣기


<!--
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
-->