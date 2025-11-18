//게시글과 관련된 api를 모아놓는 파일

import axios from "axios"
//axiosInstance를 쓰면 앞에 /api도 쓸 필요 없음
import { axiosInstance } from "../../jwt/jwt_util";

//게시글 목록 조회
export const getBoardListApi = async () => {
  try {
    const res = await axiosInstance.get('/board');
    return res.data;
  } catch (e) {
    console.log('게시글 목록 조회 API 호출 시 오류 발생 : getBoardListApi()');
    console.log(e);
  }
}

/**
 * 게시글 상세 조회 API
 * @param boardNum 게시글 번호(int)
 */
export const getBoardDetail = async (boardNum) => {
  try {
    const res = await axiosInstance.get(`board/${boardNum}`);
    return res.data
  } catch (e) {
    console.log('게시글 상세 조회 api 오류, getBoardDetail()');
    console.log(e);
  }
}

/**
 * 게시글 등록 API
 * @param boardInfo {'title' : '제목 데이터', 'content' : '내용 데이터'}
 */
export const regBoard = async (boardInfo) => {
  try {
    await axiosInstance.post('/board', boardInfo);
  } catch (e) {
    console.log('게시글 등록 api 오류, regBoard()');
    console.log(e);
  }
}

//게시글 삭제

//게시글 수정