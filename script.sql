SET SQL_SAFE_UPDATES = 0;  -- Auto update for user_commission table does not use primary key in the backend, this setting will allow that exception.

INSERT INTO product_type 
 (product_type_id, p_type)
VALUES 
 (1, '2 Wheeler'),
 (2, '3 Wheeler'),
 (3, '4 Wheeler'),
 (4, 'Commercial Vehicle');

INSERT INTO products 
 (p_id, p_cost, p_name, p_type)
VALUES 
 (1, 60000, 'Honda', '2 Wheeler'),
 (2, 70000, 'TVS', '2 Wheeler'),
 (3, 1100000, 'Toyota', '4 Wheeler'),
 (4, 2000000, 'Ashok Leyland', 'Commercial Vehicle'),
 (5, 5000000, 'BMW', '4 Wheeler'),
 (6, 1500000, 'Mahindra', '4 Wheeler'),
 (7, 200000, 'Bajaj', '3 Wheeler'),
 (8, 1000000, 'Volvo', 'Commercial Vehicle'),
 (9, 350000, 'Piaggio', '3 Wheeler'),
 (10, 90000, 'Yamaha', '2 Wheeler');
 
INSERT INTO commission_structure 
 (commission_id, commission_percentage, end_range, product_type_id, start_range)
VALUES 
 (1, 3, 30000, 1, 0),
 (2, 5, 50000, 1, 30000),
 (3, 8, null, 1, 50000),
 (4, 3, 50000, 2, 0),
 (5, 5, null, 2, 50000),
 (6, 4, 100000, 3, 0),
 (7, 6, 500000, 3, 100000),
 (8, 10, null, 3, 500000),
 (9, 6, 500000, 4, 0),
 (10, 11, null, 4, 500000);