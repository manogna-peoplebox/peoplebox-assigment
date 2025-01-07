INSERT INTO Categories (CategoryName) VALUES 
('Laptops'), 
('Smartphones'), 
('Tablets'), 
('Accessories'), 
('Cameras');



INSERT INTO Customers (FirstName, LastName, Email, Phone, Address) VALUES
('Ram', 'Sharma', 'ram.sharma@gmail.com', '9876543210', ' Mumbai, Maharashtra'),
('Sita', 'Devi', 'sita.devi@gmail.com', '8765432109', 'Chennai, Tamil Nadu'),
('Lakshman', 'Gupta', 'lakshman.gupta@gmail.com', '7654321098', 'Hyderabad, Telangana'),
('Hanuman', 'Rao', 'hanuman.rao@gmail.com', '6543210987', 'Bangalore, Karnataka'),
('Bharath', 'Kumar', 'bharath.kumar@gmail.com', '5432109876', 'Kolkata, West Bengal'),
('Urmila', 'Nair', 'urmila.nair@gmail.com', '4321098765', ' Kerala'),
('Sumitra', 'Patel', 'sumitra.patel@gmail.com', '3210987654', ' Ahmedabad, Gujarat'),
('Manogna', 'Karapakula', 'manogna.karapakula@gmail.com', '2109876543', 'Andhra Pradesh');

INSERT INTO Products (ProductName, Description, Price, Stock, CategoryID) VALUES
('HP Pavilion 15', 'Affordable laptop for everyday use', 54999, 25, 1),
('Lenovo ThinkPad X1 Carbon', 'Premium business ultrabook', 129999, 15, 1),
('OnePlus 11', 'Flagship smartphone with great performance', 59999, 30, 2),
('Redmi Note 13 Pro', 'Budget smartphone with excellent features', 19999, 50, 2),
('Samsung Galaxy Tab A8', 'Tablet for work and play', 18999, 20, 3),
('Realme Pad X', 'Affordable tablet for multimedia use', 14999, 18, 3),
('Boat Rockerz 255 Pro+', 'Wireless neckband with deep bass', 1499, 100, 4),
('Sony WH-1000XM5', 'Premium noise-canceling headphones', 28999, 20, 4),
('Canon EOS 1500D', 'Entry-level DSLR for photography enthusiasts', 35999, 10, 5),
('Nikon Z50', 'Compact mirrorless camera for vlogging', 74999, 8, 5);

-- Orders
INSERT INTO Orders (CustomerID) VALUES (1), (2), (3), (4), (5), (6), (7), (8), (1), (2), (3), (4);

-- Order_Items
INSERT INTO Order_Items (OrderID, ProductID, Quantity) VALUES
(1, 1, 1), (1, 2, 1), (2, 3, 2), (3, 4, 3),
(4, 5, 1), (5, 6, 1), (6, 7, 2), (7, 8, 1),
(8, 9, 1), (9, 10, 3), (10, 2, 2), (11, 3, 1),
(12, 4, 4);
