CREATE TABLE theater_reservation(
	theater_num INT PRIMARY KEY AUTO_INCREMENT,
	theater_name VARCHAR(20) NOT NULL UNIQUE,
	show_cnt INT,
	price INT NOT NULL,
	seats INT NOT NULL,
	reserve_cnt INT NOT NULL,
	reserve_rank INT DEFAULT(
);

DROP TABLE theater_reservation;

SELECT * FROM theater_reservation;

INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('씨네극장', 3, 22000, 400, 4101);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('호수극장', 2, 24000, 250, 4816);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('뷰티풀극장', 4, 18000, 350, 7412);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('스위트극장', 3, 20000, 500, 5739);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('블루홀극장', 2, 17000, 200, 5559);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('강변극장', 3, 28000, 550, 5409);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('스크린극장', 5, 18000, 350, 5941);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('씨네극장', 3, 21000, 250, 6355);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('에듀윌극장', 5, 19000, 600, 8054);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('포레스트극장', 4, 17000, 450, 4260);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('동백극장', 2, 20000, 200, 7434);
INSERT INTO theater_reservation (theater_name, show_cnt, price, seats, reserve_cnt)
VALUES ('테라피극장', 3, 24000, 350, 7566);

DELETE FROM theater_reservation;
