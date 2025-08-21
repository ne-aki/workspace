//이곳은 연습장입니다.
//ここは練習帳です。
function button() {
  alert('버튼이라고!');
}

const arr = ['1번배열', '2번배열', '3번배열'];
const student1 = {
  name : "홍길동",
  age : 20,
  tel : "010-0000-0000",
  score : "A"
}
const {name, age, tel, score} = student1;
console.log(name);
console.log(age);
console.log(tel);
const[result1, result2, result3, result4] = arr;
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(arr[2]);
console.log(arr);
console.log(arr[3]);
const arr2 = [3, 5, 7];
function f1() {
  return arr2[0] + arr2[1];
}
console.log(f1());
const aaa = {
  a : 'ds',
  b : 'dm',
  c : 'wklf'
}

const bbb = ['dk', 'sdk', 'ㅇ라']

console.log(bbb.length);
console.log(aaa.a);


