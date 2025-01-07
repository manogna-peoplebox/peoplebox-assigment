class OrderService:
    def __init__(self, stock):
        self.stock = stock

    def validateOrder(self, order):
        for item, quantity in order.items():
            if item not in self.stock:
                raise ValueError(f"Item '{item}' is not in stock.")
            if quantity > self.stock[item]['quantity']:
                raise ValueError(f"Not enough stock for item '{item}'. Available: {self.stock[item]['quantity']}, Requested: {quantity}.")
        return True

    def calculateTotal(self, order):
        subtotal = sum(self.stock[item]['price'] * quantity for item, quantity in order.items())
        tax = subtotal * 0.10
        discount = 0.05 * subtotal if subtotal > 100 else 0
        total = subtotal + tax - discount
        return {
            'subtotal': subtotal,
            'tax': tax,
            'discount': discount,
            'total': total
        }

    def processOrder(self, order):
        totals = self.calculateTotal(order)
        for item, quantity in order.items():
            self.stock[item]['quantity'] -= quantity

        receipt = {
            'order_details': [
                {
                    'item': item,
                    'quantity': quantity,
                    'price_per_item': self.stock[item]['price'],
                    'total_price': self.stock[item]['price'] * quantity
                }
                for item, quantity in order.items()
            ],
            'subtotal': totals['subtotal'],
            'tax': totals['tax'],
            'discount': totals['discount'],
            'final_total': totals['total']
        }
        return receipt

# Predefined stock
stock = {
    'apple': {'price': 2.0, 'quantity': 50},
    'banana': {'price': 1.0, 'quantity': 30},
    'orange': {'price': 1.5, 'quantity': 20},
    'grape': {'price': 3.0, 'quantity': 15}
}

# Initialize the order service
order_service = OrderService(stock)

# User input
while True:
    print("\nAvailable stock:")
    for item, details in stock.items():
        print(f"{item}: ${details['price']} each, {details['quantity']} in stock")

    print("\nEnter your order (type 'done' when finished):")
    order = {}
    while True:
        item = input("Enter item name (or 'done' to finish): ").strip()
        if item.lower() == 'done':
            break
        if item not in stock:
            print("Item not available. Please try again.")
            continue
        while True:
            try:
                quantity = int(input(f"Enter quantity for {item} (Available: {stock[item]['quantity']}): ").strip())
                if quantity <= 0:
                    print("Quantity must be greater than 0. Please try again.")
                elif quantity > stock[item]['quantity']:
                    print(f"Not enough stock for {item}. Only {stock[item]['quantity']} available.")
                    retry = input("Do you want to try again? (yes/no): ").strip().lower()
                    if retry != 'yes':
                        quantity = stock[item]['quantity']
                        print(f"Adding maximum available quantity ({quantity}) for {item}.")
                        break
                else:
                    break
            except ValueError:
                print("Invalid quantity. Please enter a valid number.")
        if quantity > 0:
            order[item] = quantity

    if not order:
        print("No items in the order. Please try again.")
        continue

    receipt = order_service.processOrder(order)
    print("\nReceipt:")
    for detail in receipt['order_details']:
        print(f"{detail['item']} - Quantity: {detail['quantity']}, "
              f"Price per item: ${detail['price_per_item']}, "
              f"Total price: ${detail['total_price']:.2f}")
    print(f"Subtotal: ${receipt['subtotal']:.2f}")
    print(f"Tax: ${receipt['tax']:.2f}")
    print(f"Discount: ${receipt['discount']:.2f}")
    print(f"Final Total: ${receipt['final_total']:.2f}")

    print("\nUpdated stock:")
    for item, details in stock.items():
        print(f"{item}: ${details['price']} each, {details['quantity']} in stock")

    next_order = input("\nWould you like to place another order? (yes/no): ").strip().lower()
    if next_order != 'yes':
        print("Thank you for shopping with us!")
        break
