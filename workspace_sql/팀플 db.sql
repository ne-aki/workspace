SELECT MEM_ID
    FROM SHOP_MEMBER
    WHERE MEM_ID = 'aaaaa';
UPDATE shop_member
SET mem_role = 'ADMIN'
WHERE mem_id = 'admin';

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'기억에 남는 추억의 장소는?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'자신의 인생 좌우명은?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'가장 기억에 남는 선생님 성함은?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'타인이 모르는 신체 비밀이 있다면?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'받았던 선물 중 기억에 남는 독특한 선물은?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'유년시절 가장 생각나는 친구 이름은?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'인상 깊게 읽은 책 이름은?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'읽은 책 중에서 좋아하는 구절이 있다면?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'자신이 두 번째로 존경하는 인물은?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'친구들에게 공개하지 않은 어릴 적 별명이 있다면?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'초등학교 때 기억에 남는 짝꿍 이름은?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'다시 태어나면 되고 싶은 것은?'
);


INSERT INTO forgotpw (
	pw_question
) VALUES (
	'내가 좋아하는 캐릭터는?'
);

INSERT INTO forgotpw (
	pw_question
) VALUES (
	'내가 좋아하는 색깔은?'
);

SELECT * FROM forgotpw;
SELECT * FROM review;
SELECT * FROM shop_member;

DROP TABLE shop_member;
DROP TABLE review;
DROP TABLE review_img;
DROP TABLE forgotpw;
COMMIT;