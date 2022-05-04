# 개요
HTML - Structure 구조(뼈대)
CSS - Presentation 스타일(꾸미기)
JS - Interaction 상호작용(기능)

# HTML
Hyper Text Markup Language의 약자
웹 페이지의 틀을 만드는 마크업 언어
tag(<>)들로 이루어짐
트리구조 
태그 내부에 내용 없으면, <tag />self-closing tag 이용 가능
자주 사용하는 태그
<div> vs <span> div태그는 한줄차지함, span 태그는 컨텐츠 크기만큼 공간차지함
<img> - 이미지 삽입 닫는태그 필요 X
<a> - 링크삽입 새창으로 하는예제 => <a href="http://op.gg" target="_blank">옵쥐쥐</a>
<ul>,<li> - 리스트  <ul> - unOrdered LIst <=> <ol> - ordered List - 1,2,3으로 정렬됨
<input> - 예시 => <input type="text" placeholder="type here"> type radio-여러개중 한개만 선택가능(그룹설정 해줘야 가능{name을 똑같이}) , checkbox- 여러개 선택가능
<textarea> - input태그와 다르게 줄바꿈이 되는 입력폼
<button> - value값을 넣어서 사용가능
<footer><main><header>... - 시멘틱 태그로 <div>와 같지만 이름을 가지는 태그들

# CSS
CSS HTML에 적용하는법 - <link rel="stylesheet" href="index.css" />
HTML에서 id로 이름 붙여서 스타일링 적용가능 - id는 문서 내에 단 하나의 요소에만 적용할수 있음 #id로 적용가능
HTML에서 class를 지정하여 스타일링 적용가능 - 여러개의 class를 하나의 엘리먼트로 적용가능 .class로 적용가능
텍스트 꾸미기 - 색상 - color , 글꼴 - font-family , 크기 - font-size, 굵기 - font-weight , 밑줄,가로줄 -  text-decoration, 자간 - letter-spacing , 행간 - line-height , 가로로 정렬 - text-align => left, right, center, justify(양쪽 정렬) , 세로로 정렬 - vertical-align로 가능하지만 이 속성은 부모 요소의 display 속성이 반드시 table-cell 이어야함 등..
절대단위 - px, pt등
상대단위 - %, em, rem, ch, vw, vh등
박스모델 -  border(테두리)를 기준으로 padding(안쪽 여백)과 margin(바깥 여백)이 있고, 제일 안쪽에 content가 있음 => margin > border > padding > content
박스 크기 보다 콘텐츠 크기가 더 큰 경우, 콘텐츠가 박스 바깥으로 빠져나옴 -> overflow 속성을 지정해 박스보다 큰 콘텐츠에는 스크롤을 표시가능