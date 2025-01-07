--create view order summary

CREATE VIEW order_summary AS
SELECT 
    o.OrderID,
    CONCAT(c.FirstName, ' ', c.LastName) AS CustomerName,
    COUNT(DISTINCT oi.ProductID) AS UniqueProducts,
    SUM(oi.Quantity) AS TotalQuantity,
    SUM(oi.Quantity * p.Price) AS TotalAmount,
    o.OrderDate
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Order_Items oi ON o.OrderID = oi.OrderID
JOIN Products p ON oi.ProductID = p.ProductID
GROUP BY o.OrderID;

--Write a stored procedure to update stock levels

DELIMITER //

CREATE PROCEDURE UpdateStock(ProductID INT, Quantity INT)
BEGIN
    UPDATE Products
    SET Stock = Stock - Quantity
    WHERE ProductID = ProductID AND Stock >= Quantity;
END //

DELIMITER ;

--Create triggers to call the stored procedure on insertion of new order_item and deletion of an order_item

 
DELIMITER //

CREATE TRIGGER AfterOrderItemInsert
AFTER INSERT ON Order_Items
FOR EACH ROW
BEGIN
    CALL UpdateStock(NEW.ProductID, NEW.Quantity);
END //

CREATE TRIGGER AfterOrderItemDelete
AFTER DELETE ON Order_Items
FOR EACH ROW
BEGIN
    UPDATE Products
    SET Stock = Stock + OLD.Quantity
    WHERE ProductID = OLD.ProductID;
END //

DELIMITER ;

