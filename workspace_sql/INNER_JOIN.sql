# 조인(JOIN)

# -- 사전 지식 --

#사원번호, 사원명, 급여, 부서번호를 조회
SELECT
	EMPNO
	, ENAME
	, SAL
	, DEPTNO
FROM emp;

#위 쿼리문에 생략된 부분을 살리면...
SELECT
	EMP.EMPNO
	, EMP.ENAME
	, EMP.SAL
	, EMP.DEPTNO
FROM emp;

#별칭을 테이블명에 적용시키면...
#별칭은 AS를 붙일 수 있으나, 붙이지 않는 것을 권장
SELECT
	EMPNO
	, ENAME
	, SAL 급여
	, DEPTNO AS 부서번호
FROM emp 부서정보;

#위 두 내용을 함께 사용하면 다음과 같다.
#별칭을 사용하면 테이블명으로 조회 불가능
SELECT
	E.EMPNO
	, E.ENAME
	, E.SAL
	, E.EPTNO
FROM emp E;

# --- 조인의 기본문법(Cross Join) ---
#사번, 사원명, 급여, 부서명, 부서번호를 조회
SELECT * FROM emp; #14
SELECT * FROM dept; #4

#JOIN 조건은 WHERE절에 넣어도 상관없으나, WHERE이 아닌 ON절에 넣어야 함
#INNER JOIN
SELECT
	EMPNO
	, ENAME
	, SAL
	, DNAME
	, emp.DEPTNO
	, dept.DEPTNO
FROM emp INNER JOIN dept #56
ON emp.DEPTNO = dept.DEPTNO;

#급여가 300이상인 사원들의 사번, 사원명, 급여, 부서번호, 부서명, 부서지역(LOC)을 조회하되, 급여 기준 내림차순으로 정렬
SELECT
	EMPNO
	, ENAME
	, SAL
	, E.DEPTNO
	, DNAME
	, LOC
FROM emp E
INNER JOIN dept D
ON E.DEPTNO = D.DEPTNO
WHERE SAL >= 300
ORDER BY SAL DESC;