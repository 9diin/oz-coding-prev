// 반복문

// 앞서 조건문을 이해하기 위해 자바스크립트 인터프리터가 소스 코드를 따라 분기하는 경로를 따라간다 언급했습니다.
// 반복문 경로를 자기 자신 쪽으로 구부려 코드 일부를 반복하는 문이며 루프라고 하기도 합니다.
// 자바스크립트에는 while, do-while, for, for-of(변형인 for-await), for-in 다섯 가지 루프가 있습니다.

// 1. while
// if 문이 자바스크립트의 기본 조건문인 것과 마찬가지로, while 문은 자바스크립트의 기본 루프입니다.

while (expression) {
    statement;
}

// while 문을 실행하면 인터프리터는 먼저 expression을 평가합니다.
// 표현식의 값이 false 같은 값이면 인터프리터는 루프 바디를 건너뛰고 다음 문으로 이동합니다.

// 반면, expression이 true 같은 값이면 인터프리터는 statement를 실행하고,
// 루프 맨 위로 올라가 expression을 평가하길 반복합니다.
// 달리 말하지면 인터프리터는 expression이 true 같은 값인 동안(while) statement를 반복적으로 실행한다고 할 수 있습니다.
// while(true)로 설정하면, 무한 루프를 만들 수 있습니다. => 단, 자바스크립트에서는 정확히 같은 동작을 무한 반복하길 원하지는 않습니다.

let count = 0;

while (count < 10) {
    console.log("현재 count 값: ", count);
    count++;
}

// 위 예제에서 count 변수는 0으로 시작하고 루프 바디를 실행할 때마다 1씩 증가하는 로직입니다.
// 루프를 10회 실행하면 count가 더 이상 10보다 작지 않으므로 표현식은 false로 바뀌고,
// 인터프리터는 while 문을 끝내고 프로그램 다음 문으로 이동합니다.

// 2. do-while
// do-while 루프는 while 루프와 비슷하지만, 루프 표현식이 루프 맨 위가 아니라 맨 아래에서 평가된다는 점이 다릅니다.
// 따라서 루프 바디는 항상 최소 한 번은 실행됩니다.

do statement;
while (expression);

// do-while 루프는 while에 비해 자주 사용되지는 않습니다.
// 사실 루프 바디를 최소 한 번은 실행해야 하는 상황이 그리 많지는 않기 때문입니다.

function printArray(array) {
    let i = 0;
    let len = array.length;

    if (len === 0) {
        console.log("빈 배열입니다.");
    } else {
        do {
            console.log(array[i]);
        } while (++i < len);
    }
}

// [참고]
// do-while 루프와 일반적인 while 루프 문법에는 두 가지 차이가 있습니다.
// 첫 벉째로 do-while 루프는 루프 시작을 알리는 do 키워드와 루프의 끝을 알리고 조건을 평가하는 while 키워드가 모두 있어야 한다는 점입니다.
// 두 번째는 do-while 루프는 반드시 항상 세미콜론으로 끝나야 한다. 대신, while 루프는 루프 바디를 중괄호로 감싼 경우에는 세미콜론이 필요하지 않다.

// 3. for
// for 문은 자바스크립트의 대표적인 반복문

for (initialize; test; increment) {
    statement;
}

// initialize, test, increment는 세미콜론으로 구분하며 각각 루프 변수의 초기화, 테스트, 증감을 담당합니다.
// 이 요소들은 루프의 첫 번째 행에 모음으로써 for 루프가 무엇을 하는지 이해하기 쉽고,
// 루프 변수의 초기화나 증감을 잊어버리는 실수를 방지할 수 있다는 편리함이 있습니다.
// while 문과 비교를 해보겠습니다.

// initialize;
// while (test) {
//     statement;
//     increment;
// }
let count = 0;

while (count < 10) {
    console.log("현재 count 값: ", count);
    count++;
}

// for (initialize; test; increment) {
//     statement;
// }
for (let count = 0; count < 10; count++) {
    console.log("현재 count 값: ", count);
}
