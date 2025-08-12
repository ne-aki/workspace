#외래키(Foreign Key, FK)
#테이블 간의 관계 표현에 사용. 다른 테이블의 기본키를 참조 함!
#외래키는 파생된 테이블(자식 테이블)에서 사용하면 됨

DROP TABLE qna_board;
DROP TABLE reply;

#게시판 테이블(부모 테이블)
CREATE TABLE QNA_BOARD(
	BOARD_NUM INT PRIMARY KEY
	, TITLE VARCHAR(20)
	, CONTENT VARCHAR(20)
	, WRITER VARCHAR(20)
);

#댓글 테이블(자식 테이블)
CREATE TABLE REPLY(
	REPLY_NUM INT PRIMARY KEY
	, REPLY_CONTENT VARCHAR(20)
	, REPLY_WRITER VARCHAR(20)
	, BOARD_NUM INT REFERENCES QNA_BOARD (BOARD_NUM) ON DELETE CASCADE #ON DELETE CASCADE : 부모 테이블의 내용을 삭제하면 자식테이블 자동 삭제(시험에 잘 나옴)
);

INSERT INTO qna_board
VALUES (
	1
	, 'AA'
	, 'AA내용'
	, '김'
);

INSERT INTO qna_board
VALUES (
	2,
	'BB',
	'BB내용',
	'이'
);

INSERT INTO qna_board
VALUES (
	3
	, 'CC'
	, 'CC내용'
	, '박'
);

INSERT INTO reply
VALUES(
	1
	, '11'
	, '김'
	, 1
);

INSERT INTO reply
VALUES(
	2
	, '22'
	, '이'
	, 1
);

INSERT INTO reply
VALUES(
	3
	, '33'
	, '김'
	, 2
);

DELETE FROM qna_board
WHERE BOARD_NUM = 1;

SELECT * FROM reply;

INSERT INTO reply
VALUES(
	4
	, '44'
	, '윤'
	, 5
);





DROP TABLE student_info;

#연습용 테이블
#1. 학급 정보
CREATE TABLE CLASS_INFO (
	CLASS_NUM INT PRIMARY KEY #학급번호
	, CLASS_NAME VARCHAR(20) NOT NULL UNIQUE #학급명
);

#2. 학생 정보
CREATE TABLE STUDENT_INFO (
	STU_NUM INT PRIMARY KEY AUTO_INCREMENT
	, STU_NAME VARCHAR(20) NOT NULL
	, STU_AGE INT
	, CLASS_NUM INT REFERENCES CLASS_INFO (CLASS_NUM)
);

INSERT INTO class_info VALUES (1, '자바반');
INSERT INTO class_info VALUES (2, '영상반');
INSERT INTO class_info VALUES (3, '디자인반');

INSERT INTO student_info VALUES (1, '김자바', 20, 1);
INSERT INTO student_info VALUES (2, '윤자바', 30, 1);
INSERT INTO student_info VALUES (3, '정자바', 40, 1);

INSERT INTO student_info VALUES (4, '김영상', 20, 2);
INSERT INTO student_info VALUES (5, '윤영상', 30, 2);
INSERT INTO student_info VALUES (6, '정영상', 40, 2);

INSERT INTO student_info VALUES (7, '김디자인', 20, 3);
INSERT INTO student_info VALUES (8, '윤디자인', 30, 3);
INSERT INTO student_info VALUES (9, '정디자인', 40, 3);

COMMIT;

SELECT * FROM class_info;
SELECT * FROM student_info;