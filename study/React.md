# 리엑트
리엑트 - 프론트엔드 개발을 위한 JavaScript 오픈소스 라이브러리
리엑트 특징
1. 선언형 - JSX를 활용한 선언형 프로그래밍 지향
2. 컴포넌트 기반 - 하나의 기능 구현의 코드들을 묶어둔 컴포넌트 기반으로 개발. 컴포넌트 분리시 독립적이고, 재사용 가능.
3. 범용성 - JavaScript 프로젝트 어디든 유연하게 적용가능

# JSX
JSX - React에서 UI 구성시 사용하는 문법. JavaScript를 확장한 문법. 브라우저가 이해할수 있게 Babel로 JavaScript로 컴파일함.
JSX 문법 규칙
1. 하나의 엘리먼트 안에 모든 엘리먼트가 포함되어야 함.
2. 엘리먼트 클래스 사용 시, className으로 표기
3. JavaScript표현식 사용시, 중괄효 `{}` 이용
4. 사용자 정의 컴포넌트는 대문자로 시작
5. 조건부 렌더링에는 if문 대신 삼항연산자 사용
6. 여러 개의 HTML 엘리먼트 표시할때, map() 함수 이용. map 함수에 "key" JSX속성을 넣어야함.

# 컴포넌트
컴포넌트 - 하나의 기능 구현을 위한 여러종류의 코드 묶음. 가장 근원의 root 컴포넌트를 기준으로 트리 구조로 컴포넌트 끼리 연결하여 구현

# SPA
SPA - Single Page Application의 약자로 페이지에서 필요한 부분만 업데이트하는 방식으로 작동하는 웹 어플리케이션이나 사이트
SPA의 장점
1. 필요한 부분의 데이터만 받아서 화면에 업데이트 하기 때문에 Interaction에 빠르게 반응
2. 서버에서 요청 받은 데이터만 넘겨주면 되기 때문에 서버 과부하 문제가 줄어듬
3. 전체 페이지 렌더링 할 필요가 없어서 더 나은 유저경험 제공
SPA의 단점
1. 첫 화면 로딩 시 JavaScript파일의 크기가 크기때문에 오래걸림
2.  HTML 파일에 자료가 거의 없기때문에, 검색 엔진 최적화가 안 좋음.

# React Router
라우팅(Routing) - 다른 주소에 따라 다른 뷰를 보여주는 과정(경로에 따라 변경)
React Router 주요 컴포넌트
1. BrowserRouter - 라우터 역활
2. Switch,Route - 경로 매칭하는 역활
3. Link - 경로 변경하는 역활
- 컴포넌트 사용위해 React Router 라이브러리 불러와야함 - `import {BrowserRouter,Switch,Route,Link} from "react-router-dom";``

# Props
props - 변하지 않는 외부에서 전달받은 값
props 특징
1. 컴포넌트의 속성을 의미 - 웹 어플에서 해당 컴포넌트 가진 속성에 해당
2. 부모(상위) 컴포넌트로부터 전달받은 값
3. 객체 형태
4. 읽기 전용
props 사용방법
1. 하위 컴포넌트에 전달할 값과 속성 정의
2. props 이용하여 정의된 값과 속성 전달
3. 전달받은 props 렌더링
다른 방법
- 여는 태그와 닫는 태그 사이에 value 넣어서 전달하고, `props.children`을 이용해 해당 value에 접근하여 사용

# State
state - 컴포넌트 내부에서 변할수 있는 값
useState 사용법
1. React에서 `useState`부름 - `import {useState} from "react";`
2. `useState`를 컴포넌트 안에서 호출 - `const [state 저장 변수, state 갱신 함수] = useState(상태 초기 값);` 
state 갱신
- state 갱신을 위해 `state 갱신 함수`를 호출
주의 사항
- React 컴포넌트는 state가 변경되면 새롭게 호출되고, 리렌더링 됨. React state는 상태 변경 함수 호출로 변경해야하고, 강제로 변경시, 리렌더링 되지 않거나, state가 변경되지 않음.

# React 데이터 흐름
React는 상향식(bottom-up)으로 앱을 만드는데, 테스트가 쉽고 확장성이 좋다는 장점이 있음.
- React는 단방향 데이터 흐름을 따름
- 데이터를 전달하는 주체는 부모 컴포넌트가 되는데, 이는 데이터 흐름이 하향식(top-down)임을 의미함
- 데이터를 state로 두어야 하는지 여부에대한 질문
1. 부모로부터 props를 통해 전달되나?
2. 시간이 지나도 변하지 않나?
3. 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가?
- 위 세가지 질문에 대답이 된다면 state로할 필요 없음
- state는 접근하고자 하는 자식 컴포넌트들의 공통 부모 컴포넌트에 위치해야함
State 끌어올리기 - 상태를 변경시키는 함수를 하위 컴포넌트에 props로 전달해서(콜백 함수 사용방법과 비슷) 역방향 데이터 흐름 추가를 할수 있음

# Effect Hook
Side Effect - 함수 내에서의 구현이 외부에 영향을 끼치는 경우 해당 함수는 side Effect가 있다고 함.
Pure Function - 함수의 입력만이 함수의 결과에 영향을 주는 함수. 순수함수에는 Side Effect가 없음. 순수 함수의 특징은 전달인자가 주어질경우, 항상 똑같은 값이 리턴됨.
useEffect - 컴포넌트 내에서 Side effect를 실행할 수 있게 하는 Hook.
- useEffect의 첫번째 인자는 함수. 해당 함수 내에서 side effect를 실행하면 되는데, 다음의 조건에서 실행됨
1. 컴포넌트 생성 후 처음 화면에 렌더링
2. 컴포넌트에 새로운 props가 전달되며 렌더링
3. 컴포넌트에 상태가 바뀌며 렌더링
주의점
1. 최상위에서만 Hook을 호출
2. React 함수 내에서 Hook을 호출
