
const array1 = [1, [1, 2], [1, [5, 6], 3]]
console.log(array1[2][1][0]);



function test() {
  alert(1);
}

function test1(num1, num2) {
  // if ((num1 + num2) % 2 === 0) {
  //   alert(1);
  // } else {
  //   alert(2);
  // }
  alert((num1 + num2) % 2 === 0 ? 1 : 2)
}

function test2(arr1, arr2) {
  let sumArr1 = 0;
  let sumArr2 = 0;
  //arr1 배열의 합
  for(let i = 0; i < arr1.length; i++) {
    sumArr1 = sumArr1 + arr1[i]
  }
  //arr2 배열의 합
  for(let i = 0; i < arr2.length; i++) {
    sumArr2 = sumArr2 + arr2[i]
  }
  alert(sumArr1 - sumArr2);
}

function test3(arr) {
  alert(arr[2][2]);
}