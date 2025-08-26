
export const handleRegBookErrorMsg = (e, priceRegex) => {
  let errorStr = '';

  //const priceRegex = /^[0-9]+$/

  switch (e.target.name) {
    case 'cateNum' : 
      e.target.value === '' ? errorStr = '가테고리를 선택해 주세요.' : errorStr = '';
      break;
    case 'title' :
      if (e.target.value === '') {
        errorStr = '도서명을 입력해 주세요.';
      } else if (e.target.value.length > 20) {
        errorStr = '20자 이내로 입력해 주세요.';
      } else {
        errorStr = '';
      }
      break;
    case 'publisher' :
      if (e.target.value === '') {
        errorStr = '출판사를 입력해 주세요.';
      } else if (e.target.value.length > 20) {
        errorStr = '20자 이내로 입력해 주세요.';
      } else {
        errorStr = '';
      }
      break;
    case 'price' :
      if (e.target.value === '') {
        errorStr = '가격을 입력해 주세요.';
      } else if (!priceRegex.test(e.target.value)) {
        errorStr = '숫자만 입력 가능합니다.';
      } else {
        errorStr = '';
      }
      break;
    case 'bookIntro' :
      if (e.target.value.length > 50) {
        errorStr = '50자 이내로 입력해 주세요.';
      }
      break;
  }

  return errorStr;
}