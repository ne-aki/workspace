  const arr = [2, 5, 6];
  const [a, b, c] = arr;

  

  // const arr1 = [1, 5];
  // const f1 = (arr) => { //const arr = arr1;
  //   return arr[0] + arr[1]
  // }
  // f1(arr1);
  // console.log(f1(arr1));
  


  //구조분해할당
  const arr1 = [1, 5];
  const f1 = ([a, b]) => {
    return a + b
  }
  f1(arr1);
  console.log(f1(arr1));

  const phone = {
    modelName : 's10',
    price : 1000,
    color : 'white'
  };

  // const f2 = (p) => {
  //   console.log(`모델명 : ${p.modelName}`);
  //   console.log(`모델명 : ${p.price}`);
  //   console.log(`모델명 : ${p.color}`);
  // }
  // f2(phone);
  const f2 = ({modelName, price, color}) => {//const {modelName, price, color} = phone;
    console.log(`모델명 : ${modelName}`);
    console.log(`모델명 : ${price}`);
    console.log(`모델명 : ${color}`);
  }
  f2(phone);
  
  const {medelName, price, color} = phone;

  console.log(123);
  console.log('韓国');