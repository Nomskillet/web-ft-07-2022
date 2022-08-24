-- CREATE TABLE restaurant (

--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     address varchar,
--     catagory varchar
 
  

-- );

-- CREATE TABLE reviewer (

--     id SERIAL NOT NULL PRIMARY KEY,
--     name varchar,
--     email varchar,
--     karma INTEGER
 
  

-- );

-- CREATE TABLE review (

--     id SERIAL NOT NULL PRIMARY KEY,
--     reviewer_id INTEGER REFERENCES reviewer(id),
--     stars INTEGER,
--     title varchar,
--     review varchar,
--     restaurant_id INTEGER REFERENCES restaurant(id)
 
  

-- );

-- INSERT INTO restaurant VALUES 
-- (DEFAULT, 'Olive Garden', '1234 Almond St Houston TX', 'Italian'),
-- (DEFAULT, 'Torchys', '2341 Peanut St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Franks Grill', '3412 Walnut Bend Houston TX', 'American'),
-- (DEFAULT, 'Outback Steakhouse', '4123 Pecan Rd Houston TX',  'American'),
-- (DEFAULT, 'Pappas BBQ', '4123 Beanwi Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Raising Canes', '3124 Pelbri Rd Houston TX', 'Fried Chicken'),
-- (DEFAULT, 'Garden of Olives', '1231 Groot St Houston TX', 'Italian'),
-- (DEFAULT, 'Flaming Tacos', '2342 Ole St Houston TX', 'Tex-Mex'),
-- (DEFAULT, 'Chucks Grill', '3413 Latrick Bend Houston TX', 'American'),
-- (DEFAULT, 'Salt Grass Steakhouse', '4124 Shuum Rd Houston TX',  'American'),
-- (DEFAULT, 'Hidaway BBQ', '4125 Swantro Rd Houston TX', 'BBQ'),
-- (DEFAULT, 'Chick-fil-a', '3126 Helm Rd Houston TX', 'Fried Chicken');

-- INSERT INTO reviewer VALUES
-- (DEFAULT, 'Karen', 'tookaren@hotmail.com', 2),
-- (DEFAULT, 'Billy', 'billywilly@hotmail.com', 3),
-- (DEFAULT, 'Bobby', 'bobbynewport@hotmail.com', 0),
-- (DEFAULT, 'Samantha', 'sam185@hotmail.com', 7),
-- (DEFAULT, 'Krieg', 'psychokrieg@hotmail.com', 1),
-- (DEFAULT, 'Charles', 'charleschuck@hotmail.com', 4),
-- (DEFAULT, 'Matt', 'magicmatt@hotmail.com', 6),
-- (DEFAULT, 'Rick', 'rick@hotmail.com', 5);

-- INSERT INTO review VALUES
-- (DEFAULT, 1, 1, 'Sooo Rude...', 'The employees were so rude to me.', 1),
-- (DEFAULT, 2, 3.5, 'Great Food', 'Food was good, atmosphere was OK', 2),
-- (DEFAULT, 3, 5, 'It was OK', 'It was OK. Food was not too great', 3),
-- (DEFAULT, 4, 2.5, 'Kinda Rude', 'Food was great. Employees were kinda rude.', 4),
-- (DEFAULT, 5, 4.5, 'Amazing', 'The food was sooo good. I have to go again.', 5),
-- (DEFAULT, 6, 3.5, 'Not my style but good food.', 'Atmosphere was not for me but the food was good.', 6),
-- (DEFAULT, 7, 4, 'Slow service', 'Service was slow but food was good when we got it.', 7),
-- (DEFAULT, 8, 3, 'Great Experience', 'Food was great and employees were so nice.', 8),
-- (DEFAULT, 1, 2.5, 'Would not go again', 'Restaurant was dirty and employees were rude. Food was OK.', 9),
-- (DEFAULT, 2, 2, 'Have to go again.', 'Great food. Wonderfull experience and atmosphere.', 10),
-- (DEFAULT, 3, 5, 'Why???', 'My only complaint is that this restaurant is on the other side of town.', 11),
-- (DEFAULT, 4, 4, 'How much food can you eat', 'Food was great. Portions were big.', 12),
-- (DEFAULT, 5, 3, 'Could not eat another bite', 'I was so full when I left. Gotta go again.', 1),
-- (DEFAULT, 6, 1, 'Not my cup of tea', 'They did not have my kind of tea.', 2),
-- (DEFAULT, 7, 2, 'Very very rude', 'Employee at the cashier yelled at me. Food was OK.', 3),
-- (DEFAULT, 8, 1.5, 'Not very good', 'Food and atmosphere was not very good.', 4);

--1
-- SELECT * 
-- FROM review
-- INNER JOIN restaurant
-- ON review.restaurant_id = restaurant.id
-- WHERE restaurant_id = '1'

--2
-- SELECT * 
-- FROM review
-- INNER JOIN restaurant
-- ON review.restaurant_id = restaurant.id
-- WHERE restaurant_id = 'Olive Garden'

--3
SELECT * 
FROM review
INNER JOIN restaurant
ON review.restaurant_id = restaurant.id
WHERE restaurant_id = 'Olive Garden'