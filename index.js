// To do Application 만들기

// - 기능 설계 -
// ⭕️ 1. 할 일 추가하기 (+ 버튼 클릭 시)
// ⭕️ 2. 할 일 조회하기
// 3. 할 일 갯수 체크
// 4. 체크박스 활성화 시, 할 일 완료 처리하기 (글자색 변경 및 가운데 줄 처리)
// 5. 체크박스 비활성화 시, 다시 해야할 일로 변경(원상 복구)
// ⭕️ 6. 할 일 삭제하기
// ⭕️ 7. 만약, 할 일이 하나도 추가되지 않으면 "문구" => UX
// => "조회 가능한 할 일이 없습니다.", "할 일을 추가하세요!" 등 => 최소 높이를 정해주면 좋을 것 같다?
// 8. 스크롤 처리
// ⭕️ 9. 공백으로 작성 후 할 일 추가할 시, 경고 문구 띄우기
// 10. #뒤에 있는 숫자가 우선순위를 의미한다라고 가정하고, 순차적으로 보여준다.

// ====================================================================================================

const inputField = document.querySelector(".input-box__input"); // 입력창 태그
const createBtn = document.querySelector(".input-box__btn"); // + 버튼 태그
const listContainer = document.querySelector(".list"); // ul 태그

const todos = JSON.parse(localStorage.getItem("todos")) || [];

// 기능 - 할 일 추가하기
// + 버튼 클릭 시, 할 일을 추가하고 로컬스토리지에 저장
createBtn.addEventListener("click", () => {
    const inputValue = inputField.value;

    if (!inputValue) {
        alert("할 일을 입력하세요.");
        return; // 입력 값이 없으면 함수를 종료
    }

    todos.push(inputValue); // ["inputValue"]
    localStorage.setItem("todos", JSON.stringify(todos)); // todos 배열을 로컬 스토리지에 저장

    inputField.value = ""; // 버튼 클릭 후 입력 필드 초기화
    alert("할 일이 추가되었습니다.");

    renderTodos();
});

// 할 일 목록을 화면에 출력하는 함수
function renderTodos() {
    // 1. 로컬 스토리지에서 내가 추가한 todos를 불러와야 한다.
    // localStorage.getItem("todos"); // => string => JSON.parse()
    // const todos = JSON.parse(localStorage.getItem("todos")) || [];

    // console.log("listContainer: ", listContainer);
    listContainer.innerHTML = ""; // 기존 목록 초기화

    // 2. 할 일 목록이 없는 경우: 즉, todos가 빈 배열일 떄
    if (todos.length === 0) {
        // "조회 가능한 할 일 목록이 없습니다.", "할 일을 추가해주세요!", "조회 가능한 할 일이 없습니다." ...
        // ul 태그 안에 위 문구를 삽입 시킨다.
        const emptyMessage = document.createElement("p");

        emptyMessage.textContent = "할 일을 추가해주세요! 📈";
        listContainer.appendChild(emptyMessage);

        return; // 이후 코드를 실행하지 않음
    }

    // 3. 할 일 목록이 있는 경우
    todos.forEach((todo, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("item");

        const checkbox = document.createElement("input");
        checkbox.classList.add("item__checkbox");
        checkbox.type = "checkbox";

        const todoText = document.createElement("p");
        todoText.classList.add("item__content");
        todoText.textContent = todo;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("item__btn");

        // 삭제 버튼 내부 요소에 아이콘 넣기
        // - appendChild => 아이콘 태그를 받는 식별자
        // const deleteIcon = document.createElement("i");
        // deleteIcon.setAttribute("data-lucide", "x");
        // deleteBtn.appendChild(deleteIcon);

        // - innerHTML => X => 그냥 냅다 할당해버린다.
        deleteBtn.innerHTML = '<i data-lucide="x"></i>';

        // 할 일 목록 삭제
        deleteBtn.addEventListener("click", () => {
            // 배열의 정보를 삭제하면 되려나?
            // 배열의 정보는 어떻게 삭제하지?
            // 어떻게? => splice()
            // 클릭하는 위치에 따라 다른데요?
            // todos.splice(0, 1); // 첫 번째 요소 하나만 삭제
            // todos.splice(1, 1); // 두 번쨰 요소 하나만 삭제
            // todos.splice(2, 1); // 세 번쨰 요소 하나만 삭제
            // todos.splice(3, 1); // 네 번째 요소 하나만 삭제
            todos.splice(index, 1);
            // 로컬 스토리지에 재할당
            localStorage.setItem("todos", JSON.stringify(todos));

            renderTodos(); // 재귀 함수
        });

        listItem.append(checkbox, todoText, deleteBtn);
        listContainer.appendChild(listItem);
    });
    lucide.createIcons();
}

// 페이지가 로드되면 할 일 목록을 렌더링
renderTodos();
