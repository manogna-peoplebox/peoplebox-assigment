def multiply_and_add(multiplier, multiplicand):
    product = multiplier * multiplicand
    result = product + multiplicand
    return result

def calculate_sum_and_product(number1, number2):
    sum = number1 + number2
    product_with_sum= multiply_and_add(number1, number2)
    return sum, product_with_sum

sum_result, product_result = calculate_sum_and_product(3, 5)
print("Sum:", sum_result)
print("Product with addition:", product_result)
