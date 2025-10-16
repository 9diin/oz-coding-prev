// 1. 함수 호출
// 함수 바디를 구성하는 자바스크립트 코드는 함수를 정의할 때가 아니라 호출할 때 실행됩니다.

// 1.1 함수로 호출
// 일반적인 함수 호출에서는 함수의 반환 값이 호출 표현식의 값입니다.
// return 문을 만나지 않은 채 인터프리터가 함수의 끝에 도달하면 반환 값은 undefined 입니다.
// 인터프리터가 return 문을 실행해서 함수를 종료한다면 return 문 다음에 있는 표현식의 값이 함수의 반환 값이며,
// return 문에 값이 없다면 undefined가 함수의 반환 값입니다.

// 조건부 호출
// 함수 표현식과 여는 괄호 사이에 ?.를 넣어서 함수가 null이나 undefined가 아닌 경우에만 호출하게 할 수 있습니다.
// 예시) f?.(x)

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet()); // Hello, undefined!

let fn = greet;
let result = fn !== null && fn !== undefined ? fn("Alice") : undefined;
// result = "Hello, Alice!"

fn = null;
let result2 = fn !== null && fn !== undefined ? fn("Bob") : undefined;
// result2는 undefined

const fn2 = greet;
console.log(fn2?.());

// 1.2 함수 매개변수
// 자바스크립트 함수는 매개변수로 어떤 타입을 받는지 정의하지 않으며, 함수 호출 시점에서도 전달받은 값의 타입을 체크하지 않습니다.

// 1.2.1 선택 사항인 매개변수와 기본 값
// 선언된 매개변수보다 적은 인자로 함수를 호출하면, 대응하는 인자가 없는 매개변수는 기본 값으로 정해지며
// 일반적으로 이 값은 undefined 입니다.

// 예제 01)
// 객체 obj의 열거 가능한 프로퍼티를 배열 arr에 추가하고 arr를 반환합니다.

function getPropertyNames(obj, arr) {
    if (arr === undefined) {
        arr = [];
    }
    for (let property in obj) {
        arr.push(property);
    }
    return arr;
}

// getPropertyNames()는 인자 한 개나 두 개로 호출할 수 있습니다.
let one = { x: 1 };
let two = { y: 2, z: 3 };
let arr = getPropertyNames(one);

console.log(arr); // arr = ["x"]
console.log(getPropertyNames(two, arr)); // ["x", "y", "z"]

// 함수를 호출할 때, 첫 번째 인자를 생략하고 두 번째만 전달하려면 첫 번째 인자에 명시적으로 undefined를 써야 합니다.
// 함수를 정의할 때, 함수 매개변수의 기본 값을 정의할 수도 있습니다.
// 매개변수 이름 뒤에 등호(=)를 쓰고, 그 매개변수가 생략됐을 때 사용할 기본 값을 쓰면 됩니다.

function getPropertyNames2(obj, arr = []) {
    for (let property in obj) {
        arr.push(property);
    }
    return arr;
}

// 1.2.2 나머지 매개변수와 가변 길이 인자 리스트
// 매개변수 기본 값을 사용하면 정의된 매개변수보다 적은 인자를 써서 함수를 호출할 수 있습니다.
// 나머지 매개변수(Rest Parameter)는 반대입니다.
// 정의된 매개변수 보다 더 많은 인자를 써서 함수를 호출할 수도 있습니다.

function sum(...numbers) {
    let total = 0;

    console.log("numbers: ", numbers); // []

    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum()); // 0

function introduce(greeting, ...names) {
    for (let name of names) {
        console.log(`${greeting}, ${name}`);
    }
}

console.log(introduce("Hello", "Alice", "Bob", "Charlie"));
// Hello, Alice
// Hello, Bob
// Hello, Charlie

// 1.2.3 Argument 객체
// 함수 바디 안에서 식별자 arguments는 해당 호출의 arguments 객체를 참조합니다.
// arguments 객체는 함수에 전달된 인자 값을 이름이 아닌 숫자로 참조할 수 있게 합니다.

// 쉽게 말해, arguments 객체는 함수에 전달된 모든 인자(값)들을 담고 있는 특별한 '보관함' 같은 것 입니다.
// 이 보관함은 함수 안에서만 사용할 수 있습니다.

// 함수를 호출할 때, 괄호() 안에 값을 넣어서 전달하는데, 이 값들을 인자(argument)라고 합니다.

function myFunction(a, b) {
    // 함수 내부
}

myFunction("안녕하세요", 1000);

// 이때 arguments 객체는 "안녕하세요"와 1000을 순서대로 담고 있는, 배열과 아주 비슷하게 생긴 객체입니다.
// "arguments 객체는 함수에 전달된 인자 값을 이름이 아닌 숫자로 참조할 수 있게 합니다"라는 이 말의 의미는
// 우리가 함수를 정의할 때, a와 b처럼 인자의 이름(매개변수)을 정해주지만
// arguments 객체를 사용하면 그 이름 대신 0번째, 1번째 같은 순서(숫자)로 값에 접근할 수 있다는 뜻입니다.

// - a 라는 이름으로 접근 => "안녕하세요"
// - arguments[0] 라는 숫자로 접근 => "안녕하세요"

// - b 라는 이름으로 접근 => 1000
// - arguments[1] 라는 숫자로 접근 => 1000

// 언제 유용할까요?
// arguments 객체는 함수에 몇 개의 인자가 들어올지 모를 때 특히 유용합니다.
// 예를 들어, 전달된 모든 숫자를 더하는 함수를 만든다고 상상해 보세요.
// 2개를 더할 수도 있고, 5개를 더할 수도 있겠죠?

function sumAll() {
    let total = 0;

    console.log("arguments: ", arguments);

    // arguments.length는 함수에 전달된 인자의 총 개수를 알려줍니다.
    for (let i = 0; i < arguments.length; i++) {
        // arguments[i]를 사용해 각 인자에 순서대로 접근합니다.
        total += arguments[i];
    }
    return total;
}

console.log(sumAll(1, 2, 3)); // 결과: 6 (인자가 3개)
console.log(sumAll(10, 20, 30, 40)); // 결과: 100 (인자가 4개)
console.log(sumAll(5)); // 결과: 5 (인자가 1개)

// 1.2.4 함수 호출과 분해 연산자
// 분해 연산자 ...는 개별 값이 예상되는 컨텍스트에서 배열이나 문자열 같은 이터러블 객체를 분해합니다.
// ...는 평가를 통해 값을 얻을 수 없다는 점에서 진정한 연산자로는 볼 수 없습니다.
// ...는 배열 리터럴과 함수 호출에 사용할 수 있는 특별한 자바스크립트 문법입니다.

// 분해 연산자(...)는 간단히 말해 '포장을 푸는 것' 또는 '내용물만 꺼내는 것'이라고 생각하면 아주 쉽습니다.
// 배열이나 문자열 같은 묶음(이터러블 객체)의 껍데기(대괄호 [] 등)을 벗겨내고 알멩이, 즉 개별 값들만 남겨주는 역할을 합니다.

// - 함수에 인자를 전달할 때
// Math.max() 함수는 Math.max(1, 5, 3)처럼 낱개의 숫자들을 받아서 가장 큰 값을 찾아줍니다.
// 여기에 배열 [1, 5, 3]을 통째로 넣으면 에러가 나니다. 이때 ...로 배열의 포장을 풀어주면 됩니다.

const numbers = [1, 5, 3];

// 잘못된 사용
Math.max(numbers); // NaN (배열 자체를 비교할 수 없음)
console.log(Math.max(numbers)); // NaN

// 올바른 사용
Math.max(...numbers); // NaN (배열 자체를 비교할 수 없음)
console.log(Math.max(...numbers)); // 5

// - 새로운 배열을 만들 때 (배열 합치기/복사)
// 다른 배열의 내용물만 쏙 빼서 새 배열에 넣고 싶을 때 아주 유용합니다.

const fruits1 = ["사과", "바나나"];
const fruits2 = ["딸기", "포도"];

// ...로 각 배열의 내용물만 쏙 빼서 혹은 꺼내서 새 배열에 담기
const combinedFruits = [...fruits1, ...fruits2];
console.log(combinedFruits); // ['사과', '바나나', '딸기', '포도']

function introduce(name, age, job) {
    console.log(name);
    console.log(`이름: ${name}, 나이: ${age}, 직업: ${job}`);
}
const details = ["개발자 9Diin", 100, "개발자"];

// 배열 통째로 전달하면 안됨
introduce(details); // 이름: 개발자 9Diin,100,개발자, 나이: undefined, 직업: undefined

// 분해 연산자로 배열의 각 요소를 개별 인자로 전달
introduce(...details); // 이름: 개발자 9Diin, 나이: 100, 직업: 개발자
introduce("개발자 9Diin", 100, "개발자");
