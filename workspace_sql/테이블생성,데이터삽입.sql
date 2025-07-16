
#테이블 생성

#학생 정보 저장하는 테이블 생성문
CREATE TABLE STUDENT(
	STU_NUM INT PRIMARY KEY, #중복 데이터 저장 불가, NULL 불가
	STU_NAME VARCHAR(10),
	KOR_SCORE INT,
	MATH_SCORE INT
);

SELECT * FROM student;
COMMIT;

#데이터 삽입 문법
#INSERT INTO 테이블명 (컬럼들) VALUES (값들);
INSERT INTO student (STU_NUM, STU_NAME, KOR_SCORE, MATH_SCORE)
VALUES (2, '김자바', 80, 90);

#컬럼명은 반드시 테이블에 정의된 컬럼의 개수를 맞출 필요가 없다.
#순서도 맞출 필요 없다.
INSERT INTO student (STU_NUM, MATH_SCORE, STU_NAME)
VALUES (3, 100, '이자바');

INSERT INTO student (KOR_SCORE, MATH_SCORE, STU_NUM)
VALUES (60, 70, 4);

#데이터의 변화가 발생하는 쿼리문(삽입, 삭제, 수정) 실행시에 반드시 COMMIT 혹은 ROLLBACK을 진행해야 한다.
ROLLBACK;

#테이블 삭제 쿼리 : DROP TABLE 테이블명
DROP TABLE student;

#회원정보 테이블
#아이디, 비밀번호, 회원이름, 회원 나이, 이메일 정보를 갖고 있다.
CREATE TABLE MEMBER(
	MEM_ID VARCHAR(10) PRIMARY KEY,
	MEM_PW VARCHAR(10) NOT NULL, #NULL값이 못들어감
	MEM_NAME VARCHAR(10) NOT NULL,
	MEM_AGE INT,
	MEM_EMAIL VARCHAR(20) UNIQUE #중복값 불가능, NULL은 가능! NULL은 중복체크X
);

SELECT * FROM member;

#아이디 : java
#비번 : 1111
#이름 : 김자바
#나이 : 30
#이메일 : java@gmail.com
INSERT INTO member (MEM_ID, MEM_PW, MEM_NAME, MEM_AGE, MEM_EMAIL)
VALUES ('java', '1111', '김자바', 30, 'java@gmail.com');

INSERT INTO member (MEM_ID, MEM_PW, MEM_AGE, MEM_EMAIL, MEM_NAME)
VALUES ('java2', '1234', 30, NULL, 'AAA');

#테이블 생성문에서 작성한 순서대로 데이터를 삽입하면 컬럼명 생략 가능
INSERT INTO member
VALUES ('java3', '2222', '최자바', 40, 'aaa@gmail.com');
COMMIT;

#게시판 테이블
#글번호, 제목, 작성자, 내용, 작성일, 조회수
DROP TABLE BOARD;
CREATE TABLE BOARD(
	BOARD_NUM INT PRIMARY KEY AUTO_INCREMENT, #자동증가
	TITLE VARCHAR(20) NOT NULL,
	WRITER VARCHAR(10) NOT NULL,
	CONTENT VARCHAR(100),
	CREATE_DATE DATETIME DEFAULT SYSDATE(), # 컴퓨터에 있는 날짜
	READ_CNT INT DEFAULT 0 #기본값을 0으로
);

SELECT * FROM board;

SELECT * FROM board
WHERE board_num = 1;

INSERT INTO BOARD (TITLE, WRITER)
VALUES ('제목3','작성자3');

COMMIT;

INSERT INTO BOARD (TITLE, WRITER, READ_CNT, CREATE_DATE, BOARD_NUM)
VALUES ('제목1','작성자1', 5, '2020-10-10 17:50:00', 10);

SELECT * FROM BOARD;
ROLLBACK;

SELECT * FROM emp;