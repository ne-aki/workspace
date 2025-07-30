#게시판 프로젝트 테이블
CREATE TABLE board (
	BOARD_NUM INT PRIMARY KEY AUTO_INCREMENT
	, TITLE VARCHAR(30) NOT NULL
	, WRITER VARCHAR(20) NOT NULL
	, CONTENT VARCHAR(50)
	, READ_CNT INT DEFAULT 0
	, CREATE_DATE DATETIME DEFAULT SYSDATE()
);

DELETE FROM board;

INSERT INTO board (
	TITLE
	, WRITER
	, CONTENT
) VALUES (
	'첫번째 글'
	, '김자바'
	, '첫 번째 게시글입니다.'
);

INSERT INTO board (
	TITLE
	, WRITER
	, CONTENT
) VALUES (
	'두번째 글'
	, '이자바'
	, '두 번째 게시글입니다.'
);

INSERT INTO board (
	TITLE
	, WRITER
	, CONTENT
) VALUES (
	'세번째 글'
	, '김자바'
	, '세 번째 게시글입니다.'
);

INSERT INTO board (
	TITLE
	, WRITER
	, CONTENT
) VALUES (
	'제목입니다'
	, '홍길동'
	, '내용입니다.'
);

INSERT INTO board (
	TITLE
	, WRITER
	, CONTENT
) VALUES (
	'안녕하세요'
	, '임꺽정'
	, '잘 부탁드립니다.'
);

COMMIT;

SELECT * FROM board;