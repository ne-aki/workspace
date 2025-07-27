CREATE TABLE REST_ORDER_INFO (
	ITEM_NUM INT PRIMARY KEY,
	ITEM_NAME VARCHAR(20),
	PRICE INT,
	CNT INT,
	ID VARCHAR(20),
	TOTAL INT DEFAULT (PRICE * CNT)
);

SELECT * FROM rest_order_info;

INSERT INTO rest_order_info (
	ITEM_NUM
	, ITEM_NAME
	, PRICE
	, CNT
	, ID
) VALUES (
	101
	, '데님 청바지'
	, 15000
	, 2
	, 'abc'
);

INSERT INTO rest_order_info (
	ITEM_NUM
	, ITEM_NAME
	, PRICE
	, CNT
	, ID
) VALUES (
	102
	, '맨투맨 반팔 티셔츠'
	, 10000
	, 3
	, 'def'
);

INSERT INTO rest_order_info (
	ITEM_NUM
	, ITEM_NAME
	, PRICE
	, CNT
	, ID
) VALUES (
	103
	, '오버핏 니트'
	, 25000
	, 2
	, 'ghi'
);

INSERT INTO rest_order_info (
	ITEM_NUM
	, ITEM_NAME
	, PRICE
	, CNT
	, ID
) VALUES (
	104
	, '롱 패딩'
	, 55000
	, 1
	, 'jkl'
);

INSERT INTO rest_order_info (
	ITEM_NUM
	, ITEM_NAME
	, PRICE
	, CNT
	, ID
) VALUES (
	105
	, '맨투맨 긴팔 티셔츠'
	, 12000
	, 3
	, 'mno'
);

COMMIT;

ROLLBACK;