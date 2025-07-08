CREATE TABLE student_info(
	stu_name VARCHAR(10) NOT NULL,
	stu_num INT PRIMARY KEY,
	grade VARCHAR(5),
	admission_date DATE NOT NULL,
	major VARCHAR(20)
);

SELECT * FROM student_info;

INSERT INTO student_info (stu_name, stu_num, admission_date)
VALUES('이근형',20180146,'2018-03-02');

UPDATE student_info
SET
	grade = 4,
	major = '일본어과'
WHERE stu_num = 20180146;

DELETE FROM student_info
WHERE grade = 4;
COMMIT;

INSERT INTO student_info
VALUES ('김자바', 20, 3, '2020-03-02', '사회과학');

ROLLBACK;