function a() {
    console.log("A");
}

function b() {
    console.log("B");
}

// 코드를 작성한 순서대로 동작하는 것을 "동기"라고 합니다.
a(); // A
b(); // B

function a1() {
    setTimeout(() => {
        console.log("A1");
    }, 1000);
}

function b1() {
    console.log("B1");
}

// 예) A라는 값이 출력된 후에 B라는 값이 출력될 수 있도록 보장하려면 어떻게 해야할까?

function a2(callback) {
    setTimeout(() => {
        console.log("A2");
        callback();
    }, 1000);
}

function b2() {
    console.log("B2");
}

a2(b2);
