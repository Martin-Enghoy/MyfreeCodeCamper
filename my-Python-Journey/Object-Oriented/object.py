#   Object-Oriented Programming: Basics & Declarations

class Item:
    #   Class Attributes
    pay_rate = 0.8  # After 20% discount

    #   init executes automatically upon instance
    #       init can set default if not passed any param in instances
    def __init__(self, name: str, price: float, quantity=0):
        #   Validation
        assert price >= 0, f"Price {price} should not be negative."
        assert quantity >= 0, f"Quantity {quantity} should not be negative."

        #   Assignments
        self.name = name
        self.price = price
        self.quantity = quantity

    # Object Methods
    # def calculateTotalPrice(self, price, quantity):
    #     return price * quantity

    def calculateTotalPrice(self):
        return self.price * self.quantity

    def applyDiscount(self):
        self.price = self.price * self.pay_rate


#   instances + attributes
item1 = Item("Phone", 150, 10)
# item1.name = "Phone"
# item1.price = 150
# item1.quantity = 10
# print(item1.calculateTotalPrice(item1.price, item1.quantity))
print(item1.calculateTotalPrice())
print(item1.name)
print(item1.pay_rate)   #   Pulls from class level
# print(item1.__dict__)   #   Instance Level Attributes printed

item2 = Item("PC", 500, 5)
item2.pay_rate = 0.5    #   Assigns in instance level
print(item2.pay_rate)
# item2.name = "PC"
# item2.price = 500
# item2.quantity = 5
# print(item2.calculateTotalPrice(item2.price, item2.quantity))
print(item2.calculateTotalPrice())
print(item2.name)
print(item2.quantity)

#   Adding attributes without __init__
#       It is still possible to create attributes without being inside __init__
item2.has_numpad = False
# print(Item.__dict__)    #   Class Level Attributes printed

item1.applyDiscount()
print(item1.price)

item2.applyDiscount()
print(item2.price)
