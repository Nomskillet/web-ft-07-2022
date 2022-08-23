
-- INSERT INTO student VALUES (
  	
--   	'Joy', 'joy@dc.com', 'joy@github.com', 10, 'F', '2022-07-05', FALSE
  
--   );


-- INSERT INTO student VALUES

--     ('Nomi', 'nomi@dc.com', 'nomi@github.com', 30, 'M', '2022-07-05', FALSE),
--     ('shannon', 'shannon@dc.com', 'shannon@github.com', 10, 'F', '2022-07-05', FALSE),
--     ('Tommy', 'tom@dc.com', 'tom@github.com', 10, 'M', '2022-07-05', FALSE),
--     ('Austin', 'austin@dc.com', 'austin@github.com', 10, 'M', '2022-07-05', FALSE);



-- UPDATE student SET points = 8;

-- UPDATE student SET points = 20 WHERE name  = 'Nomi' or name ='Joy';

-- UPDATE student SET gender = 'F' Where name = 'Joy'

-- UPDATE student SET points = 15 WHERE gender ='M';

-- DELETE FROM student WHERE name = 'Austin';

-- DELETE FROM student WHERE gender = 'M';


-- CREATE TABLE blogs (

--     id SERIAL NOT NULL PRIMARY KEY,
--     title varchar(150),
--     start_date DATE,
--     isVisible BOOLEAN DEFAULT FALSE

-- );

-- INSERT INTO blogs VALUES
-- (DEFAULT, 'js is awesome', '2022-08-22', TRUE),
-- (DEFAULT, 'learning node', '2022-08-22', TRUE),
-- (DEFAULT, 'installing postgres on mac', '2022-08-22', TRUE),
-- (DEFAULT, 'installing postgres on pc', '2022-08-22', TRUE),
-- (DEFAULT, 'google apis', '2022-08-22', TRUE);


-- DELETE FROM blogs WHERE id = 5;

-- INSERT INTO blogs VALUES (DEFAULT, 'Google api', TRUE);

-- SELECT * FROM blogs;
-- SELECT title, start_date FROM blogs;

-- SELECT * FROM student WHERE gender = 'M';
-- SELECT * FROM student WHERE points >= 20;
-- SELECT name, points, gender FROM student WHERE points >= 20 AND gender = 'F';


-- SELECT 
--     *
-- FROM
--     student
-- WHERE
--     github_username LIKE '%an%' --can put 'i' in front of like for case sensitive


-- ALTER TABLE blogs
-- ADD isPublished boolean DEFAULT TRUE;

-- ALTER TABLE blogs
-- DROP COLUMN isVisible;


-- ALTER TABLE blogs ALTER COLUMN title TYPE varchar(30);


-- SELECT COUNT(*), SUM(points), AVG(points), MIN(points), MAX(points) FROM student;

-- SELECT * FROM student ORDER BY name DESC;
-- SELECT * FROM student ORDER BY points DESC, name ASC;
-- SELECT * FROM student ORDER BY gender;
-- SELECT * FROM student ORDER BY gender LIMIT 3;