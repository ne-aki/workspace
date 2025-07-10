//1,2 - 기본함수
//3,4 - 함수표현식
//5,6,7 - 화살표함수
// -초급-
// 1. 인사 함수 만들기
// 이름을 매개변수로 받아서 "안녕하세요, [이름]님!"을 반환하는 함수를 작성하세요.
function f1(name) {
  return `안녕하세요, ${name}님!`
}
// 2. 두 수의 합 계산하기
// 두 개의 숫자를 매개변수로 받아서 그 합을 반환하는 함수를 작성하세요.
function f2(num1, num2) {
  return num1 + num2;
}
// 3. 짝수 홀수 판별하기
// 숫자를 매개변수로 받아서 짝수면 "짝수", 홀수면 "홀수"를 반환하는 함수를 작성하세요.
const f3 = function(num) {
  return num % 2 === 0 ? '짝수' : '홀수';
}
// -중급-
// 4. 배열의 최댓값 찾기
// 숫자 배열을 매개변수로 받아서 가장 큰 값을 반환하는 함수를 작성하세요. (Math.max 사용 금지)
const f4 = function(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
// 5. 문자열 뒤집기
// 문자열을 매개변수로 받아서 뒤집은 문자열을 반환하는 함수를 작성하세요.
const f5 = str => {
  //누적 합과 비슷함
  let reStr = '';
  for (let i = str.length - 1; i > -1; i--) {
    reStr = reStr + str[i]
  }
  return reStr;
}
// 6. 팩토리얼 계산하기
// 양의 정수를 매개변수로 받아서 팩토리얼을 계산하는 함수를 작성하세요.
const f6 = num => {
  let fac = 1;
  for (let i = num; i > 0; i--) {
    fac = fac * i;
  }
  return fac;
}
//자바에 비슷한 시험문제 있음.
// -고급-
// 7. 배열 중복 제거하기
// 배열을 매개변수로 받아서 중복된 요소를 제거한 새로운 배열을 반환하는 함수를 작성하세요.
const f7 = arr => {
  //빈 배열을 만든다.
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) { //배열 크기만큼 반복!
    const cnt = 0; //중복 데이터 개수
    for (let j = 0; j < i; j++) {//배열 각 요소의 중복검사를 반복!
      if (arr[i] === arr[j]) {
        cnt++;
      }
    }
    if (cnt === 0) {
      resultArr.push(arr[i]);
    }
  }
}
//--------------//
const result1 = f1('이근형');
console.log(result1);
const result2 = f2(3, 5);
console.log(result2);
const result3 = f3(5);
console.log(result3);
const result4 = f4([1,5,7,3,6,2]);
console.log(result4);
const result5 = f5('bedrock');
console.log(result5);
const result6 = f6(6);
console.log(result6);
const result7 = f7([3,2,1,3,5])



const str = 'java'; //문자열도 배열로 취급한다.
console.log(str[0]);
const answer = str[3] + str[2] + str[1] + str[0];
console.log(answer);



