ALTER USER 'root'@'localhost' IDENTIFIED BY 'sugi@123';
flush privileges;
SELECT * FROM new.users;
DELETE FROM new.users;
