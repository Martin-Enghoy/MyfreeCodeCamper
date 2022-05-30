
class Item:
    # Class Attributes
    pay_rate = 0.8

    # Store Instances
    instanceHistory = []

    def __init__(self, name: str, price: float, quantity=0):
        # Validation
        assert price >= 0, f"Price {price} should not be negative."
        assert quantity >= 0, f"Quantity {quantity} should not be negative."

        # Assignments
        self.name = name
        self.price = price
        self.quantity = quantity

        # Append Instance
        Item.instanceHistory.append(self)

    def calculateTotalPrice(self):
        return self.price * self.quantity

    def applyDiscount(self):
        self.price = self.price * self.pay_rate

    # Representation when printed
    def __repr__(self):
        return f"Item('{self.name}',{self.price}, {self.quantity})"

item1 = Item("Phone", 150, 10)
item2 = Item("PC", 500, 5)
item3 = Item("Monitor", 75, 8)
item4 = Item("Mouse", 25, 15)
item5 = Item("Keyboard", 50, 15)

print(Item.instanceHistory)
# for inst in Item.instanceHistory:
#     print(inst.name)
#     print(inst.price)