use libproj;

-- create books table
CREATE TABLE books (
  book_id INT PRIMARY KEY,
  title VARCHAR(255),
  author_id INT,
  publisher VARCHAR(255),
  publish_date DATE,
  quantity INT
);

-- create authors table
CREATE TABLE authors (
  author_id INT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255)
);

-- create users table
CREATE TABLE users (
  user_id INT PRIMARY KEY,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255)
);

-- create borrowed books table
CREATE TABLE borrowed_books (
  id INT PRIMARY KEY,
  book_id INT,
  user_id INT,
  borrowed_date DATE,
  due_date DATE,
  returned_date DATE
);

-- insert sample data into books table
 INSERT INTO books (book_id, title, author_id, publisher, publish_date, quantity)
VALUES
  (1, 'The Great Gatsby', 1, 'Scribner', '1925-04-10', 10),
  (2, 'To Kill a Mockingbird', 2, 'J. B. Lippincott & Co.', '1960-07-11', 5),
  (3, '1984', 3, 'Secker & Warburg', '1949-06-08', 8),
  (4, 'Pride and Prejudice', 4, 'T. Egerton', '1813-01-28', 15),
  (5, 'Animal Farm', 3, 'Secker & Warburg', '1945-08-17', 12),
  (6, 'Brave New World', 5, 'Chatto & Windus', '1932-06-20', 7),
  (7, 'The Catcher in the Rye', 6, 'Little, Brown and Company', '1951-07-16', 9),
  (8, 'Lord of the Flies', 7, 'Faber and Faber', '1954-09-17', 6),
  (9, 'The Hobbit', 8, 'Allen & Unwin', '1937-09-21', 11),
  (10, 'The Fellowship of the Ring', 8, 'Allen & Unwin', '1954-07-29', 13),
  (11, 'The Two Towers', 8, 'Allen & Unwin', '1954-11-11', 14),
  (12, 'The Return of the King', 8, 'Allen & Unwin', '1955-10-20', 16),
  (13, 'Harry Potter and the Philosopher''s Stone', 9, 'Bloomsbury', '1997-06-26', 20),
  (14, 'Harry Potter and the Chamber of Secrets', 9, 'Bloomsbury', '1998-07-02', 18),
  (15, 'Harry Potter and the Prisoner of Azkaban', 9, 'Bloomsbury', '1999-07-08', 17),
  (16, 'Harry Potter and the Goblet of Fire', 9, 'Bloomsbury', '2000-07-08', 15),
  (17, 'Harry Potter and the Order of Phoenix', 9, 'Bloomsbury', '2003-06-21', 13),
  (18, 'Harry Potter and the Half-Blood Prince', 9, 'Bloomsbury', '2005-07-16', 11),
  (19, 'Harry Potter and the Deathly Hallows', 9, 'Bloomsbury', '2007-07-21', 9),
  (20, 'The Da Vinci Code', 10, 'Doubleday', '2003-03-18', 12);

-- insert sample data into authors table

INSERT INTO authors (author_id, first_name, last_name, email)
VALUES
  (1, 'Ernest', 'Hemingway', 'ehemingway@gmail.com'),
  (2, 'Harper', 'Lee', 'hlee@yahoo.com'),
  (3, 'George', 'Orwell', 'gorwell@hotmail.com'),
  (4, 'Jane', 'Austen', 'jausten@gmail.com'),
  (5, 'Aldous', 'Huxley', 'ahuxley@hotmail.com'),
  (6, 'J.D.', 'Salinger', 'jdsalinger@gmail.com'),
  (7, 'William', 'Golding', 'wgolding@yahoo.com'),
  (8, 'J.R.R.', 'Tolkien', 'jrrtolkien@hotmail.com'),
  (9, 'J.K.', 'Rowling', 'jkrowling@gmail.com'),
  (10, 'Dan', 'Brown', 'dbrown@yahoo.com'),
  (11, 'Mark', 'Twain', 'mtwain@hotmail.com'),
  (12, 'F. Scott', 'Fitzgerald', 'fsfitzgerald@gmail.com'),
  (13, 'Gabriel', 'Garcia Marquez', 'ggmarquez@yahoo.com'),
  (14, 'Virginia', 'Woolf', 'vwoolf@hotmail.com'),
  (15, 'Leo', 'Tolstoy', 'ltolstoy@gmail.com'),
  (16, 'Toni', 'Morrison', 'tmorrison@yahoo.com'),
  (17, 'John', 'Steinbeck', 'jsteinbeck@hotmail.com'),
  (18, 'James', 'Joyce', 'jjoyce@gmail.com'),
  (19, 'Charles', 'Dickens', 'cdickens@yahoo.com'),
  (20, 'Emily', 'Bronte', 'ebronte@hotmail.com');

-- insert sample data into users table
INSERT INTO users (user_id, first_name, last_name, email, password)
VALUES
  (1, 'John', 'Doe', 'johndoe@gmail.com', 'password123'),
  (2, 'Jane', 'Doe', 'janedoe@yahoo.com', 'qwertyuiop'),
  (3, 'Bob', 'Smith', 'bobsmith@hotmail.com', '12345678'),
  (4, 'Alice', 'Jones', 'alicejones@gmail.com', 'password'),
  (5, 'Mike', 'Brown', 'mikebrown@yahoo.com', 'password123'),
  (6, 'Sarah', 'Davis', 'sarahdavis@hotmail.com', 'qwerty'),
  (7, 'Tom', 'Wilson', 'tomwilson@gmail.com', 'password123'),
  (8, 'Emily', 'Taylor', 'emilytaylor@yahoo.com', 'qwertyuiop'),
  (9, 'David', 'Anderson', 'davidanderson@hotmail.com', 'password'),
  (10, 'Jessica', 'Lee', 'jessicalee@gmail.com', '12345678'),
  (11, 'Brian', 'Johnson', 'brianjohnson@yahoo.com', 'password123'),
  (12, 'Samantha', 'Clark', 'samanthaclark@hotmail.com', 'qwertyuiop'),
  (13, 'Robert', 'Brown', 'robertbrown@gmail.com', 'password'),
  (14, 'Michelle', 'Lee', 'michellelee@yahoo.com', 'qwerty'),
  (15, 'Andrew', 'Nguyen', 'andrewn@gmail.com', 'password123'),
  (16, 'Linda', 'Nguyen', 'lindan@hotmail.com', '12345678'),
  (17, 'Kevin', 'Wang', 'kevinw@gmail.com', 'qwertyuiop'),
  (18, 'Julia', 'Kim', 'juliakim@yahoo.com', 'password'),
  (19, 'Peter', 'Kim', 'peterkim@gmail.com', 'qwerty'),
  (20, 'Hannah', 'Choi', 'hannahchoi@hotmail.com', 'password123');


-- insert sample data into borrowed_books table
INSERT INTO borrowed_books (id, book_id, user_id, borrowed_date, due_date, returned_date)
VALUES
  (1, 1, 5, '2022-01-01', '2022-01-08', '2022-01-06'),
  (2, 2, 2, '2022-01-02', '2022-01-09', NULL),
  (3, 3, 10, '2022-01-03', '2022-01-10', NULL),
  (4, 4, 17, '2022-01-04', '2022-01-11', '2022-01-12'),
  (5, 5, 3, '2022-01-05', '2022-01-12', '2022-01-15'),
  (6, 6, 12, '2022-01-06', '2022-01-13', '2022-01-15'),
  (7, 7, 18, '2022-01-07', '2022-01-14', NULL),
  (8, 8, 11, '2022-01-08', '2022-01-15', '2022-01-17'),
  (9, 9, 4, '2022-01-09', '2022-01-16', NULL),
  (10, 10, 19, '2022-01-10', '2022-01-17', '2022-01-18'),
  (11, 11, 1, '2022-01-11', '2022-01-18', NULL),
  (12, 12, 8, '2022-01-12', '2022-01-19', '2022-01-21'),
  (13, 13, 14, '2022-01-13', '2022-01-20', '2022-01-22'),
  (14, 14, 7, '2022-01-14', '2022-01-21', '2022-01-24'),
  (15, 15, 6, '2022-01-15', '2022-01-22', NULL),
  (16, 16, 13, '2022-01-16', '2022-01-23', '2022-01-25'),
  (17, 17, 16, '2022-01-17', '2022-01-24', NULL),
  (18, 18, 15, '2022-01-18', '2022-01-25', '2022-01-27'),
  (19, 19, 9, '2022-01-19', '2022-01-26', '2022-01-28'),
  (20, 20, 20, '2022-01-20', '2022-01-27', '2022-01-30');
  
  
    #Display all the books in the library.
  SELECT * FROM books;
  
  #2.Display all the authors in the library.
  SELECT * FROM authors;

#3.Display all the users in the library.
SELECT * FROM users;

#4.Display all the borrowed books.
SELECT * FROM borrowed_books;

#Display all the books borrowed by a particular user.
SELECT books.title, borrowed_books.borrowed_date, borrowed_books.due_date, borrowed_books.returned_date
FROM borrowed_books
JOIN books ON borrowed_books.book_id = books.book_id
WHERE borrowed_books.user_id = '5';

#6.Display all the books written by a particular author.
SELECT books.title, books.publisher, books.publish_date, books.quantity
FROM books
JOIN authors ON books.author_id = authors.author_id
WHERE authors.author_id = '1';

#7.Display the number of available copies for a particular book.
SELECT (books.quantity - COUNT(borrowed_books.book_id)) AS available_copies
FROM books
LEFT JOIN borrowed_books ON books.book_id = borrowed_books.book_id
WHERE books.book_id = '2';

#8.Add a new book to the library.
INSERT INTO books (book_id, title, author_id, publisher, publish_date, quantity)
VALUES
  (21, 'The Great Strome', 21, 'Scribner', '1925-04-10', 10);
  
  #9.Update the quantity of a book in the library.
  UPDATE books SET quantity = '5' WHERE book_id = '7';
  
  #Delete a book from the library.
  DELETE FROM books WHERE book_id = '21';
  
  #11.Add a new user to the library.
  INSERT INTO users (user_id, first_name, last_name, email, password)
VALUES
  (21, 'Johnny', 'Doel', 'johnnydoel@gmail.com', 'password100');
  
  #12.Update the password of a user.
  UPDATE users SET password = 'p100' WHERE user_id = '21';
  
  #13.Delete a user from the library.
  DELETE FROM users
WHERE user_id = 21;

 #14.Borrow a book.
ALTER TABLE books ADD status ENUM('available', 'borrowed') DEFAULT 'available';
UPDATE books SET status = 'borrowed' WHERE book_id = 1;

#15.Return a book.
UPDATE borrowed_books SET returned_date = CURRENT_DATE WHERE id = 1;