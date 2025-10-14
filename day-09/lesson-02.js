// 프로퍼티 검색과 설정
// 프로퍼티 값에 접근할 때는 점(.)이나 대괄호([]) 연산자를 사용합니다.
// 이 연산자의 왼쪽의 값이 객체인 표현식이어야 합니다.
// 점 연산자를 사용한다면 오른쪽은 반드시 프로퍼티 이름인 단순한 식별자여야 합니다.
// 대괄호를 사용한다면 그 안에 있는 값은 원하는 프로퍼티 이름인 문자열로 평가되는 표현식이어야 합니다.

let author = book.author; // book의 author 프로퍼티를 가져옵니다.
let name = author.surname; // author의 surname 프로퍼티를 가져옵니다.
let title = book["main title"]; // book의 main title 프로퍼티를 가져옵니다.

// 프로퍼티를 생성하거나 설정할 때는 값을 가져올 때와 마찬가지로 점 또는 대괄호를 사용하고,
// 이들을 할당 표현식의 왼쪽에 써야 합니다.

book.edition = 10;
book["main title"] = "자바스크립트 완벽가이드";

// 대괄호를 사용하면 그 안의 표현식은 반드시 문자열로 평가되어야 한다고 했습니다.
// 더 정확히 말해, 표현식은 반드시 문자열, 또는 문자열이나 심벌로 변환될 수 있는 값으로 평가되어야 한다.

object.property = object["property"];

// 1. 상속
// 자바스크립트 객체에는 자체 프로퍼티도 있고, 프로토타입 객체에서 상속하는 프로퍼티도 있습니다.
// 예를 들어, 객체 obj에 x 프로퍼티를 가져온다고 해보겠습니다.
// obj에 x 라는 자체 프로퍼티가 없다면, obj의 프로토타입 객체에서 x 프로퍼티를 검색합니다.
// 즉, x 프로퍼티를 찾거나 or 프로토타입 null인 객체에 도달할 때까지 검색을 계속합니다.

// 객체의 prototype 속성은 자신이 어디에서 프로퍼티를 상속했는지 나타내는 체인을 형성합니다.

let obj = {}; // obj는 Object.prototype에서 객체 메서드를 상속
obj.x = 10; // 자체 프로퍼티 x 생성

console.log("obj", obj);

let prop = Object.create(obj); // prop은 obj와 Object.prototype에서 프로퍼티를 상속
prop.y = 20; // 자체 프로퍼티 y 생성

console.log("prop", prop);

let props = Object.create(prop); // props는 obj, prop, Object.prototype에서 프로퍼티를 상속
props.z = 30;

console.log("props", props); // { z: 30 }

console.log("props.x", props.x); // 10
console.log("props.y", props.y); // 20
console.log("props.a", props.a); // undefined

console.log(props.x + props.y);

// 만약, 객체 obj의 x 프로퍼티에 값을 할당해본다고 가정하겠습니다.
// 객체 obj에 이미 자체(상속되지 않은) x 프로퍼티가 있다면 그 값은 새로 할당한 값으로 바뀝니다.
// 그렇지 않다면 객체 obj에 x 프로퍼티를 새로 만들고 거기에 할당합니다.
// obj에 상속된 프로퍼티 x가 있었다면, 상속된 프로퍼티는 이제 새로 생성된 자체 프로퍼티에 "가려집니다".

// 프로퍼티 할당은 프로토타입 체인을 검색해 할당이 허용되는지 확인합니다.
// 예를 들어, obj가 읽기 전용인 x 프로퍼티를 상속한다면 할당은 허용하지 않습니다.
// readonly 읽기전용 속성이기 때문입니다.
// 그러나 할당이 허용된다면, 항상 원래 객체에 프로퍼티를 생성하거나 설정할 뿐, 프로토타입 체인에 존재하는 객체는 절대 수정하지 않습니다.

let circle = { r: 10 }; // 상속할 객체
let prop = Object.create(circle); // prop은 프로퍼티 r을 상속

prop.x = 20; // 자체 프로퍼티 x 정의
prop.y = 20; // 자체 프로퍼티 y 정의
prop.r = 40; // prop이 상속한 프로퍼티를 덮어씀

console.log("prop", prop); // {x:20, y:20, r:40}
console.log("circle", circle); // {r: 10}
console.log("circle.r", circle.r); // 10

// 2. 프로퍼티 접근 에러
// 프로퍼티 접근 표현식이 항상 값을 반환하거나 설정하는 것은 아닙니다.
// 존재하지 않는 프로퍼티를 검색하는 것은 에러가 아닙니다.
// 자체 프로퍼티나 상속된 프로퍼티가 없을 경우에는 undefined를 반환합니다.

let subTitle = book.subTitle; // => undefined: 프로퍼티가 존재하지 않습니다.

// 하지만, 존재하지 않는 "객체"의 프로퍼티를 검색하려는 것은 에러입니다.
// null과 undefined에는 프로퍼티가 없기 때문에 이런 값에서 프로퍼티를 검색하려는 것은 에러입니다.

let length = book.subTitle.length; // TypeError: undefined에는 length 프로퍼티가 없습니다.

// 프로퍼티 접근 표현식은 점 연산자의 왼쪽이 null이나 undefined이면 실패합니다.
