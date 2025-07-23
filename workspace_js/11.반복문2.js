const arr1 = [1, 3, 5];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log('\n');

//for of 반복문(java의 for-each문)
for (const e of arr1) {
  console.log(e);
}
console.log('\n');

//forEach() 함수
//첫 번째 매개변수 : 배열에 저장된 각각의 데이터
//두 번째 매개변수 : 반복문의 index(i번째)
arr1.forEach((e, i) => {
  console.log(`e = ${e}, i = ${i}`);
  return e + 1;
});
console.log('\n');

//map() 함수
//map() 함수는 코드 마지막에 리턴문을 넣을 수 있다!
const result = arr1.map((e, i) => {
  console.log(`e = ${e}, i = ${i}`);
  return e + 1;
});

console.log(result);

console.log('\n');
console.log('\n');

const stuList = [
  {
    name : 'kim',
    korScore : 80,
    engScore : 90
  },
  {
    name : 'lee',
    korScore : 90,
    engScore : 100
  },
  {
    name : 'park',
    korScore : 70,
    engScore : 100
  }
];

stuList.forEach((e, i) => {
  //console.log(e);
  console.log(stuList[i]);
});
