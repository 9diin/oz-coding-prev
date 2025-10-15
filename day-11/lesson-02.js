// 1. reduce()와 reduceRight()
// reduce()와 reduceRight() 메서드는 제공하는 함수를 사용해 배열 요소를 값 하나로 만듭니다.
// reduce()는 인자를 두 개를 받습니다.
// 첫 번째는 '축소' 동작을 행하는 함수입니다. 이 함수가 하는 일은 어떤 방식으로든 값 두 개를 받아서 하나를 반환하는 겁니다.
// 두 번째 인자는 선택 사항이며, 함수에 전달할 초깃값입니다.

// reduce()에 사용하는 함수는 forEach()와 map()에 사용하는 함수와는 다릅니다.
// 값, 인덱스, 배열 그 자체는 각각 두 번째, 세 번째, 네 번째 인자로 전달됩니다.
// 첫 번째 인자는 여태까지 행한 "축소" 작업의 결과가 할당됩니다.
// 함수를 처음 호출할 때는 그동안 행한 작업이 없으니 reduce()의 두 번째 인자로 전달한 초깃값을 사용합니다.

let nums = [1, 2, 3, 4, 5];

const res = nums.reduce((acc, num, index, arr) => {
    console.log("acc: ", acc); // x => 0
    console.log("num: ", num); // y => 1, 2, 3, 4, 5
    return acc + num;
}, 0);
console.log(res); // 15

const res2 = nums.reduce((acc, num) => {
    return acc * num;
}, 1);
console.log(res2); // 120

let num2 = [10, 2000, 3, 43, 6];
const res3 = num2.reduce((acc, num) => {
    if (acc > num) {
        return acc;
    } else {
        return num;
    }
});
console.log(res3); // 2000 => 해당 배열에서 가장 큰 값을 조회

const res4 = num2.reduce((acc, num) => {
    if (acc > num) return acc;
    else return num;
});
console.log("res4: ", res4); // 2000 => 해당 배열에서 가장 큰 값을 조회

const res5 = num2.reduce((acc, num) => (acc > num ? acc : num));
console.log("res5: ", res5); // 2000 => 해당 배열에서 가장 큰 값을 조회

// reduceRight()는 reduce()와 마찬가지지만, 오른쪽에서 왼쪽으로 진행한다는 점이 다릅니다.
const letters = ["a", "b", "c", "d"];
const res6 = letters.reduceRight((acc, cur) => acc + cur);
console.log(res6); // dcba

// 2. flat()과 flatMap()을 사용한 배열 평탄화
// flat() 메서드는 기존 배열과 같은 요소로 이루어진 "평탄한 새 배열" 즉, 중첩되지 않은 새 배열을 반환합니다.
// 인자 없이 flat()을 호출하면 한 단계만 평탄화합니다. a라는 원래 배열에 b라는 배열 요소가 있었다면, b는 평탄화되지만
// b 안에서 다시 c 배열이 있었다면, c는 평탄화되지 않습니다.
// 평탄화 레벨을 늘리려면 flat()에 숫자를 인자로 넘겨주면 됩니다.

let arr = [1, [2, 3]];

const res7 = arr.flat();
console.log(res7); // [1, 2, 3]

let arr2 = [1, [2, [3, 4]]];
const res8 = arr2.flat(1);
const res9 = arr2.flat(2);
const res10 = arr2.flat(3);
const res11 = arr2.flat(4);
const res12 = arr2.flat();

console.log("res8: ", res8); // => [1, 2, [3, 4]]
console.log("res9: ", res9); // => [1, 2, 3, 4]
console.log("res10: ", res10); // => [1, 2, 3, 4]
console.log("res11: ", res11); // => [1, 2, 3, 4]
console.log("res12: ", res12); // => [1, 2, [3, 4]]

let phrases = ["hello world", "the definitive guide"];
// let words = phrases.flatMap((phrase) => {
//     console.log("phrase: ", phrase);
//     console.log(phrase.split(" ")); // ["hello", "world", 'the', 'definitive', 'guide']
// });
// console.log(words);
let words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(words);
