// 1. 변수
// 변수란 프로그래밍 언어에서 데이터를 관리하기 위한 핵심 개념입니다.
// 변수(Variable)는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름입니다.
// 간단히 말하자면, 변수는 프로그래밍 언어에서 값을 저장하고 참조하는 매커니즘으로 값의 위치를 가리키는 상징적인 이름입니다.
// 상징적인 이름인 변수는 프로그래밍 언어의 컴파일러 또는 인터프리터에 의해 값이 저장된 메모리 공간의 주소로 치환되어 실행됩니다.
// 따라서 개발자가 직접 메모리 주소를 통해 값을 저장하고 참조할 필요가 없고, 변수를 통해 안전하게 값에 접근할 수 있습니다.

// 1.1 식별자
// 변수 이름을 "식별자"라고도 합니다.
// 식별자는 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 말합니다.
// 사람을 이름으로 구별해서 식별하는 것처럼 값도 식별자로 구별하여 식별할 수 있습니다.
// 값은 메모리 공간에 저장되어 있습니다. 따라서 식별자는 메모리 공간에 저장되어 있는 어떤 값을 구별해서 식별해 낼 수 있어야 합니다.
// 이를 위해 식별자는 어떤 값이 저장되어 있는 메모리 주소를 기억(저장)해야 합니다.

// let username = "개발자 9Diin";

// username ===============> abcdefg ===============> ["개발자 9Diin"]
// 변수 이름(식별자)             메모리 주소                 메모리, 값

// 1.2 변수 선언
// 변수 선언이란, 변수를 생성하는 것을 말합니다.
// 즉, 값을 저장하기 위한 메모리 공간을 확보하고, 변수 이름과 확보된 메모리 공간의 주소를 연결해서 값을 저장할 수 있게 준비하는 것입니다.
// 변수를 사용하라면 반드시 선언이 필요합니다.
// 변수를 사용할 때는 let과 const 키워드를 사용합니다.

// let: 키워드, score: 식별자(변수)
// 세미콜론은 코드의 의미를 명확히 하는데 중요한 역할을 합니다.
let score; // 변수 선언(변수 선언문)

// 위 코드에서 변수를 선언한 이후, 아직 변수에 값을 할당하지 않았습니다.
// 따라서 변수 선언에 의해 확보된 메모리 공간은 비어 있을 것으로 생각할 수 있으나
// 자바스크립트 엔진에 의해 확보된 메모리 공간에는 undefined라는 값이 암묵적으로 할당되어 초기화됩니다.

// - 선언 단계: 변수 이름을 등록해서 자바스크립트 엔진에 변수의 존재를 알린다.
// - 초기화 단계: 값을 저장하기 위한 메모리 공간을 확보하고 암묵적으로 undefined를 할당해 초기화한다.

console.log(score); // undefined
// console.log(username); // Cannot access 'username' before initialization

// Cannot access 'username' before initialization 에러가 발생하는 이유는
// 변수 선언이 소스코드가 한 줄씩 순차적으로 실행되는 시점, 즉 런타임(Runtime)이 아니라 그 이전 단계에서 먼저 실행되기 때문입니다.

let username;
console.log(username); // undefined

username = "개발자 9Diin"; // 값의 할당
console.log(username); // 개발자 9Diin

let email = "9diin@gmail.com"; // 변수 선언과 값의 할당

// 변수 선언은 소스 코드가 순차적으로 실행되는 시점인 런타임 이전에 먼저 실행되지만,
// 값의 할당은 소스 코드가 순차적으로 실행되는 시점인 런타임에 실행된다.

// console.log(job); // Cannot access 'job' before initialization

let job;
console.log(job); // undefined

job = "developer";
console.log(job); // developer

// 상수를 선언할 때는 const를 사용합니다.
// const는 let과 거의 비슷하지만 선언할 때 반드시 값을 초기화해야 한다는 점이 다릅니다.
// const name; // 'const' 선언을 초기화해야 합니다.

// 이름에서 짐작할 수 있듯 상수의 값은 바꿀 수 없습니다.
// 반드시 지켜야 하는 건 아니지만, 상수를 선언할 때는 전부 대문자를 써서 변수와 구별하는 관습이 있다.

// const 키워드는 자바스크립트에서 [변수 자체에 재할당을 방지하는 역할]을 합니다.
// 하지만 const로 선언한 객체나 배열의 내용물(프로퍼티나 요소)은 변경할 수 있습니다.
// 이를 이해하기 위해서는 const가 어떻게 동작하는지 좀 더 깊이 파악할 필요가 있습니다.

// 1) const는 "변수 재할당"을 막는다.
// const는 객체 자체나 배열을 다시 할당하는 것을 막습니다. 예를 들어,
const user = {
    name: "",
    email: "",
};

console.log(user); // { name: "9Diin", email: "9diin@gmail.com" }
user = { name: "test", email: "test@test.com" };

console.log(user); // Assignment to constant variable.

// 위 코드에서 user 자체를 다른 객체로 재할당하려고 하면 오류가 발생합니다.
// 하지만 객체 내부의 값을 바꾸는 것은 가능합니다.

// 2) 객체의 프로퍼티는 변경할 수 있습니다.
// 객체의 프로퍼티 값은 변경할 수 있습니다. 즉, const로 선언된 객체라도 그 객체 내부의 값은 수정이 가능합니다.
user.name = "test";
user.email = "test@test.com";

console.log(user); // { name: "test", email:"test@test.com" }

// user 객체의 속성 값을 바꿀 수 있는 이유는 user라는 변수는 객체의 참조를 가리키고 있기 때문입니다.
// 즉, let과 const 키워드를 통해 임의의 식별자를 선언하면 메모리 주소가 생기고, 그 주소를 참고합니다.
// const로 선언된 상수는 그 객체의 참조(주소)가 바뀌지 않도록 보장할 뿐, 객체 내부의 데이터 자체는 변경할 수 있습니다.

// 배열도 같은 규칙이 적용됩니다.
// 배열을 const로 선언하면 배열 자체를 재할당 할 순 없지만, 배열의 요소를 변경하거나 추가하는 것은 가능합니다.
const users = ["Kim", "Lee", "Park"];
console.log(users); // ['Kim', 'Lee', 'Park']

users = ["a", "b", "c"]; // Assignment to constant variable.

users.push("Choi");
console.log(users); // ['Kim', 'Lee', 'Park', 'Choi']

users[0] = "Song";
console.log(users); // ['Song', 'Lee', 'Park', 'Choi']

// const는 객체나 배열이 재할당되는 것을 방지하지만, 그 내용물(프로퍼티나 값, 요소)은 여전히 변경할 수 있습니다.
// const의 목적은 변수의 재할당을 방지하는 것 뿐이지, 불변성을 보장하는 것은 아닙니다.
