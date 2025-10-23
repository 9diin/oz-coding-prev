// 1. input 태그에 "할 일"을 작성한다.
// 2. + 버튼을 눌렀을 때, 어떤 이벤트가 동작하면서 작성한 "할 일" 데이터가 "어딘가"에 저장된다.
// 3. 저장됨과 동시에 "어딘가"에 저장된 "할 일" 데이터를 호출하여 목록으로 보여준다.
// 4. 체크 박스를 선택했을 때, 가운데 줄이 생기게 한다.
// 5. X 버튼을 눌렀을 때, "할 일" 목록이 제거된다. 그리고 동시에 목록을 갱신하여 현재 리스트를 보여준다.

// 우리가 개발을 하기 위해 필요한 정보
// 1. 할 일 => new task => 문자열?
// 2. 할 일들 => todos => [] 배열로 관리하면 되지 않을까?
// 3. 할 일 갯수 => todos.length

// HTML 요소
// 1. 버튼
// 2. input => Add new task의 값을 조회하기 위한
// 3. ul, li, checkbox, 삭제 버튼

// 1. input에 작성한 값을 어떻게 조회할 수 있을까?
const insertBtn = document.querySelector(".input-box__btn");
const inputField = document.querySelector(".input-box__input");

const todos = JSON.parse(localStorage.getItem("tods")) || []; // 기존 todos를 로드하거나 빈 배열로 초기화

// 등록
insertBtn.addEventListener("click", () => {
    const inputValue = inputField.value;
    todos.push(inputValue); // ["새로운 값"]

    localStorage.setItem("todos", JSON.stringify(todos)); // => 로컬 스토리지에는 "todos" - "["안녕하세요", "Hello world", "새로운 값"]"
});

todos.map((todo) => {
    // li태그를 활용한 UI를 반복해서 그리면 되지 않을까?
    return `<li class="item">
            <input type="checkbox" class="item__checkbox" />
            <p class="item__content">${todo}</p>
            <button class="item__btn">
                <i data-lucide="x"></i>
            </button>
        </li>`;
});
