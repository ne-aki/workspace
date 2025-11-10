//게시글과 관련된 api를 모아놓는 파일

import axios from "axios"

//게시글 목록 조회
export const getBoardListApi = async () => {
  try {
    const res = await axios.get('/api/board');
    return res.data;
  } catch (e) {
    console.log('게시글 목록 조회 API 호출 시 오류 발생 : getBoardListApi()');
    console.log(e);
  }
}

//게시글 상세 조회

//게시글 등록

//게시글 삭제

//게시글 수정