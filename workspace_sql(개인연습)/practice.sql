#이곳은 연습장입니다.
#ここは練習帳です。
CREATE TABLE asdf(
	abc INT PRIMARY KEY AUTO_INCREMENT,
	def VARCHAR(10),
	ghi DATETIME DEFAULT SYSDATE()
);

DROP TABLE asdf;

INSERT INTO asdf VALUES(98,'32','2020-12-12');

SELECT * FROM asdf;

INSERT INTO asdf(def)
VALUES ('これは日本語です。');

UPDATE asdf
SET
	def = 'こんにちは'
WHERE abc = 3;

ROLLBACK;
COMMIT;