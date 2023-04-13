-- Select DataBase KatasSQL
USE KatasSQL;

-- Create table
CREATE TABLE orders (
	order_id INT auto_increment, 
    order_date DATE NOT NULL,
    customer_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(order_id)

);

-- Add data
INSERT INTO orders (order_id, order_date, customer_id, amount) VALUES 
  (1, '2022-03-01', 101, 250.00),
  (2, '2022-03-02', 102, 150.00),
  (3, '2022-03-03', 103, 200.00),
  (4, '2022-03-04', 104, 300.00),
  (5, '2022-03-05', 105, 100.00);
