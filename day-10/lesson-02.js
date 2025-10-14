// 배열 순회
let letters = [..."HELLO, WORLD!"];
console.log(letters);

let string = "";
for (let letter of letters) {
    string += letter;
}
console.log(string); // HELLO, WORLD!

let everyother = "";
for (let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;
}
console.log(everyother); // HLO OL!

// forEach()도 배열을 순회하는 좋은 방법 중 하나입니다.
// 이 메서드는 for 루프의 변형이 아니라 배열 순회를 함수형으로 바꾼 배열 메서드입니다.
// forEach()는 전달받은 함수를 각 배열 요소에서 호출합니다.

let uppercase = "";
let greetings = [..."hello, world!"];

greetings.forEach((greeting, index) => {
    // 화살표 함수 문법을 사용했습니다. (함수 파트에서 배워볼 예정)
    uppercase += greeting.toUpperCase();
    console.log(greeting, index);
});
console.log(uppercase); // HELLO, WORLD!

let animals = ["호랑이", "사자", "악어", "곰", "펭귄", "늑대", "여우", "코알라", "캥거루"];
// forEach 메서드의 첫 번째 인자에 함수를 선언한다.
// => 선언한 함수의 첫 번째 요소에는 반복시킬 배열의 요소를 어떤 식별자로 활용할 것인지?,
// 두 번째 요소는 첫 번째 인자 값의 인덱스 번호를 기입한다.
animals.forEach((animal, index) => {
    console.log(animal, index);
});

// forEach()는 배열을 순서대로 순회하며 배열 인덱스를 함수의 두 번째 인자로 전달합니다.
// for-of 루프와 달리 forEach()는 성긴 배열을 인식하고,
// 존재하지 않는 요소에 대해서는 함수를 호출하지 않습니다.

let test1 = [1, 2, 3];
delete test1[1];

console.log("delete 메서드가 동작한 직후, test1: ", test1); // [1, empty, 3]
console.log("test1 배열의 길이: ", test1.length); // 3

test1.forEach((item) => {
    console.log(item); // 1 그리고 3만 출력
});

for (let item of test1) {
    console.log(item); // 1, undefined, 3 출려
}

let test2 = [1, 2, 3];
test2[1] = undefined;

console.log("test2", test2); // [1, undefined, 3]
console.log("test2 배열의 길이: ", test2.length); // 3
test2.forEach((item) => {
    console.log(item); // 1, undefined, 3
});
