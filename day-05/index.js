/* <button class="header__content__btn">앱 다운로드</button> */
// const downloadBtn = document.querySelector(".header__content__btn");

// downloadBtn.addEventListener("click", () => {
//     // 다운로드 페이지로 이동
//     console.log("앱 다운로드 버튼이 클릭되었습니다.");
//     location.href = "download.html";
// });

const containerEl = document.querySelector(".container");
console.log(containerEl);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (numbers.length === 0) {
    containerEl.innerHTML = `<span>등록된 게시물이 없습니다.</span>`;
} else {
    for (const number of numbers) {
        // statement
        containerEl.innerHTML += `<p>배열의 요소: ${number}</p>`;
    }
}

const label = {
    name: "이름",
    email: "이메일",
    age: "나이",
    job: "직업",
};
const user = {
    name: ["이름", "개발자 9Diin"],
    email: "9diin@gmail.com",
    age: 30000,
    job: "유튜바",
};

for (const property in user) {
    // statement

    // let label = "";

    // switch (property) {
    //     case "name":
    //         label = "이름";
    //         break;
    //     case "email":
    //         label = "이메일";
    //         break;
    //     case "age":
    //         label = "나이";
    //         break;
    //     default:
    //         label = "직업";
    //         break;
    // }

    // if (property === "name") {
    //     label = "이름";
    // } else if (property === "email") {
    //     label = "이메일";
    // } else if (property === "age") {
    //     label = "나이";
    // } else {
    //     label = "직업";
    // }

    containerEl.innerHTML += `<div>
        <p>${label[property]}: ${user[property]}</p>
    </div>`;
}
