CREATE TABLE BASIC_BOARD (
	BOARD_NUM INT PRIMARY KEY AUTO_INCREMENT  #컬럼의값을지정하지않으면자동으로1씩증가된값을넣어주는기능을한다.
	, TITLE VARCHAR(30)
	, WRITER VARCHAR(20)
	, CONTENT VARCHAR(50)
	, READ_CNT INT DEFAULT 0
	, CREATE_DATE DATETIME DEFAULT SYSDATE()
);

SELECT * FROM basic_board;

INSERT INTO basic_board (TITLE, WRITER, CONTENT)
VALUES ('제목1', '작성자1', '내용1');
INSERT INTO basic_board (TITLE, WRITER, CONTENT)
VALUES ('제목2', '작성자2', '내용2');
INSERT INTO basic_board (TITLE, WRITER, CONTENT)
VALUES ('제목3', '작성자3', '내용3');

INSERT INTO basic_board (
	TITLE
	, WRITER
	, CONTENT
	, READ_CNT
) VALUES (
	'첫번째 게시글 입니다'
	, '박자바'
	, '게시글의 내용입니다.'
	, 5
);
INSERT INTO basic_board (
	TITLE
	, WRITER
	, CONTENT
	, READ_CNT
) VALUES (
	'두번째 글'
	, '이자바'
	, '게시글의 내용입니다.'
	, 1
);
INSERT INTO basic_board (
	TITLE
	, WRITER
	, CONTENT
	, READ_CNT
) VALUES (
	'삼번'
	, '김자바'
	, '게시글의 내용입니다.'
	, 3
);

DELETE FROM basic_board;

SELECT
	BOARD_NUM
	, TITLE
	, WRITER
	, CREATE_DATE
	, READ_CNT
FROM basic_board
WHERE TITLE LIKE '%째%';

COMMIT;
#데이터에 변화가 생기는 쿼리문(insert, delete, update)을 실행하면 commit or rollback;

#회원 정보 테이블
CREATE TABLE BASIC_MEMBER (
	MEM_ID VARCHAR(20) PRIMARY KEY,
	MEM_PW VARCHAR(20) NOT NULL,
	MEM_NAME VARCHAR(10),
	MEM_AGE INT,
	BIRTHDAY DATETIME
);
DROP TABLE basic_memeber;

SELECT * FROM basic_member;

SELECT MEM_NAME
FROM basic_member
WHERE MEM_ID = 'aaa';

SELECT
   MEM_ID
   , MEM_PW
   , MEM_NAME
   , MEM_AGE
   , BIRTHDAY
FROM BASIC_MEMBER
WHERE MEM_ID = 'aaa'