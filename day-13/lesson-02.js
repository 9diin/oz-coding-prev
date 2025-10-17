// 콜백 함수(Callback Function)
// 콜백 함수란, 다른 함수에 인자(argument)로 전달되는 함수를 말합니다.
// 쉽게 말해, 실행을 위임받아 "나중에(call back) 실행될 함수"라는 뜻입니다.

// - 호출의 주체: 콜백 함수를 전달받은 외부 함수가 특정 시점이나 특정 조건에서 콜백 함수를 실행(호출)합니다.
// - 사용 이유: 어떤 작업이 완료된 후에 실행되어야 하는 코드를 지정하거나, 비동기적으로 처리되는 작업의 결과를 다루기 위해 사용됩니다.

const a = () => {
    console.log("A");
};
const b = () => {
    console.log("B");
};

a(b()); // b: 콜백, 콜백 함수라고 부릅니다. 함수가 실행될 때, 인수/인자로 들어가는 또 다른 함수를 콜백이라 부릅니다.
// => 위 함수 호출 결과: A

const c = (callback) => {
    console.log("C");
    callback();
};
const d = () => {
    console.log("D");
};

c(d);

const printDone = () => {
    console.log("✅ 작업 완료!");
};

const runAfter = (callback) => {
    console.log("===== 작업을 시작하였습니다. =====");
    callback(); // ✅ 작업 완료!
    console.log("===== 작업을 완료하였습니다. =====");
};

runAfter(printDone);

// ❌ 잘못된 방식: 비동기 함수의 return 값은 바로 받을 수 없습니다.
const sum = (x, y) => {
    // 이 return은 sum()의 return이 아니라, setTimeout 내부 익명 함수의 return 입니다.
    setTimeout(() => {
        console.log("setTimeout 실행!");
        return x + y; // 30
    }, 1000);
    // sum 함수 자체는 아무것도 반환하지 않으로 undefined가 나옵니다.
    console.log("sum 함수 실행!");
};

console.log(sum(10, 20)); // undefined

// ✅ 올바른 방식: 결과를 콜백 함수로 전달합니다.
const add = (a, b, callback) => {
    setTimeout(() => {
        // 계산 결과를 인자로 담아 콜백 함수를 호출합니다.
        callback(a + b);
    }, 1000);
};

add(10, 20, (result) => {
    console.log("10과 20의 합계: ", result);
});

add(30, 70, (result) => {
    console.log("30과 70의 합계: ", result);
});

// 2. 재귀 함수
// 재귀란, 함수 내부에서 자기 자신을 다시 호출하는 프로그래밍 기법입니다.
// 이는 반복되는 문제를 해결할 때 유용합니다. 마치 거울을 서로 마주보고 있을 때 끝없이 상이 비치는 것과 같습니다.

// 가장 중요한 주의사항: 종료 조건
// 재귀 호출은 무한히 반복될 수 있으므로, 함수가 멈출 수 있는 조건식(Base Case)을 반드시 작성해야 합니다.
// 이 조건이 없으면 프로그램이 멈추지 않고, 시스템 메모리를 초과하여 오류(Stack Overflow)가 발생합니다.

let i = 0;

const recursiveLoop = () => {
    console.log(`현재 i 값: ${i}`); // => 0, 1, 2, 3, 4

    i += 1; // => 1, 2, 3, 4 ,5

    // console.log(i);
    // 종료 조건: i가 5보다 작을 때만 자기 자신을 다시 호출합니다.
    if (i < 5) {
        recursiveLoop();
    }
    // i가 5가 되는 순간, 더 이상 호출하지 않고 함수가 종료됩니다.
};

recursiveLoop(); // 출력: 현재 i값: 0 부터 4 까지 순서대로 출력 후 종료

// 재귀는 위계 구조(트리, 리스트 등)에서 뿌리(Root)를 찾아 올라갈 때 매우 강력합니다.
// 제시된 getRootUser 예제가 바로 이 경우입니다.

const userA = { name: "A", parent: null };
const userB = { name: "B", parent: userA };
const userC = { name: "C", parent: userB };
const userD = { name: "D", parent: userC };

const getRootUser = (user) => {
    // 종료 조건: user.parent가 null인 경우 (가장 상위 요소)
    if (user.parent) {
        // 재귀 호출: 부모 속성이 있으면, 부모 속성을 인자로 다시 함수 호출
        return getRootUser(user.parent);
    }
    // Root에 도달하면 해당 user 객체를 반환하며 함수 체인 종료
    return user;
};

const root = getRootUser(userD);
console.log(`가장 최상위 사용자: ${root.name}`); // A => 가장 최상위 사용자

// 이 함수는 user.parent가 null이 될 때까지
// (즉, 가장 상위 사용자 A에 도달할 때까지) 자기 자신을 반복해서 호출하며 위로 거슬러 올라가는 방식으로 작동합니다.
