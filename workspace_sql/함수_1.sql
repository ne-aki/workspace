
#DISTINCT 키워드
SELECT DISTINCT DEPTNO FROM emp;
SELECT DISTINCT CATEGORY FROM book;

#DISTINCT 키워드는 한 번만 작성하면 모든 컬럼의 중복값을 제거한다.
SELECT DISTINCT JOB, DEPTNO FROM emp;

#함수
#수치 함수

SELECT CEIL(SAL), CEIL(50.2) FROM emp;
SELECT CEIL(48.9); #문법 학습을 위한 SELECT 쿼리문은 FROM 절 작성 안 해도 됨
#CEIL : 올림, FLOOR : 내림
SELECT CEIL(70.1), FLOOR(70.9);
#ROUND : 반올림
SELECT ROUND(123.456), ROUND(123.456, 1), ROUND(123.456, 2), ROUND(123.456, -2);

#FLOOR는 내림을 했을 때 결과가 정수만 나오지만 TRUNCATE는 내리는 소수점 자리를 설정할 수 있다.
#TRUNCATE : 내림
SELECT TRUNCATE(123.456, 1), TRUNCATE(123.456, 2);

#MOD : 나머지
SELECT MOD(7, 3), MOD(10, 4);

#EMP테이블에서 사번이 짝수인 사원의 모든 컬럼 정보 조회
SELECT * FROM emp
WHERE MOD(EMPNO, 2) = 0;

SELECT 3 + 5;
SELECT 5 / 2;

#문자 관련 함수
#SUBSTR, SUBSTIRNG : 문자열 일부 추출, 두 함수의 결과는 동일!
SELECT SUBSTR('ABCDEF', 3), SUBSTR('ABCDEF', 3, 2);
SELECT SUBSTRING('ABCDEF', 3), SUBSTR('ABCDEF', 3, 2);

#UPPER : 대문자로 변환, LOWER : 소문자로 변환
SELECT UPPER('MariaDB'), LOWER('MariaDB');

#LTRIM, RTRIM, TRIM : 공백제거
SELECT RTRIM('  DB  '), LTRIM('  DB  '), TRIM('  DB  ');

#CHAR_LENGTH() : 문자열의 길이, 공백 포함 ' DB ' -> 4
#LENGTHB() : 문자열의 바이트수, 영문 1글자 : 1BYTE, 한글 1글자 : 3BYTE
SELECT CHAR_LENGTH('디비'), LENGTHB('디비'), CHAR_LENGTH('DB'), LENGTHB('DB'), LENGTHB('%');

#CONCAT() : 문자열 나열
SELECT CONCAT('A', 'B', 'C');
SELECT ENAME, JOB, CONCAT(ENAME, '사원의 직급은 ', JOB) FROM emp;

#LPAD, RPAD : 문자열의 길이를 맞추는 함수
SELECT LPAD('DB', 5, '#'), RPAD('DB', 5, '#'), LPAD(123, 5, 0);

#REPLACE : 문자열 교체
SELECT REPLACE('나는 HOME에 가고 싶다.', 'HOME', '집');
