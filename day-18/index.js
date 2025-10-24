// 1. getElementById
// 특정 id를 가진 요소를 선택할 때 사용합니다.
const element = document.getElementById("id");

// 2. getElementsByClassName
// 특정 클래스명을 가진 모든 요소를 선택합니다.
// 배열처럼 다룰 수 있어 반복문 등이 순회할 수 있습니다.
const elements = document.getElementsByClassName("class");

// 3. getElementsByTagName
// 특정 태그명을 가진 모든 요소를 선택합니다.
const divs = document.getElementsByTagName("div");

// 4. querySelector
// CSS 선택자와 동일한 방식으로 하나의 요소를 선택합니다.
// #id, .class, tag 등 모든 선택자를 지원합니다.
const element = document.querySelector("#id"); // #id로 선택
const firstDiv = document.querySelector("div"); // 첫 번째 div 선택

// 5. querySelectorAll
// querySelector와 비슷하지만, 해당 선택자와 일치하는 모든 요소를 반복합니다.
const divs = document.querySelectorAll("div"); // 모든 div 선택

// 6. createElement
// 새로운 HTML 요소를 생성할 때 사용합니다.
const newDiv = document.createElement("div");
newDiv.textContent = "새로운 div!";

// 7. appendChild
// 부모 요소에 자식 요소를 추가할 때 사용합니다.
const parent = document.getElementById("id"); // <div id="id"></div>
const child = document.createElement("p"); // <p></p>

child.textContent = "자식 요소"; // <p>자식 요소</p>
parent.appendChild(child);

// 8. append
// appendChild와 비슷하지만, 여러 노드를 한 번에 추가하거나 텍스트와 HTML을 동시에 추가할 수 있습니다.
const parent = document.getElementById("id");
parent.append("새로운 텍스트", newDiv); // 여러 요소를 한 번에 추가

// append vs appendChild
// appendChild는 한 번에 한 Node만 받고, 문자열 불가(문자열 넣으면 에러). 반환값은 추가된 노드
// append는 문자열 허용, 여러 인자 허용, 반환값 없음

// 그러면 노드(Node)란 무엇일까?
// 노드(node)란?
// 웹 브라우저의 DOM(Document Object Model)에 문서(HTML)를 구성하는 기본 단위입니다.
// 문서 전체는 노드들의 트리(노드 트리)로 표현되고, 각 노드는 문서의 일부분(요소, 텍스트, 주석 등)을 나타냅니다.

// Node Tree는 HTML 문서를 트리(tree) 구조로 표현한 것입니다.
// HTML의 각 구성 요소(<html>, <body>, <div>, 텍스트 등)는 모두 Node(노드)이며
// 이 노드들이 부모-자식 관계로 연결되어 하나의 트리 구조를 이룹니다.

// 즉, 웹 페이지의 구조를 자바스크립트가 이해하고 조작할 수 있게 만든 형태입니다.

// Document
// └── html (Element)
//     └── body (Element)
//         ├── h1 (Element)
//         │   └── #text("안녕하세요")
//         └── p (Element)
//             └── #text("이것은 문단입니다.")
