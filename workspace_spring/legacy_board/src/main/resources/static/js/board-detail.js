const goDelete = (boardNum) => {
  const confirmDelete = confirm('게시글을 삭제할까요?');

  if (confirmDelete) location.href = `/board/delete/${boardNum}`
}

const goList = () => {
  //웹브라우저의 뒤로가기 버튼과 같은 역할, 데이터 갱신 안됨
  history.back();

  //데이터 갱신 됨
  //location.href = '/board'
}

const goUpdate = (boardNum) => {
  location.href = `/board/update/${boardNum}`
}