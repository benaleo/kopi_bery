def calculateRunningTotal(n, my_list):
    # Calculate running total by adding first number, subtracting second, adding third
    total = my_list[0]
    total -= my_list[1]
    total += my_list[2]
    
    # Check divisibility rules
    if total % 2 == 0 and total % 3 != 0:
        return total * 2
    elif total % 3 == 0 and total % 2 != 0:
        return total * 3
    return total

def main():
    n = int(input())
    my_list = list(map(int, input().split()))
    result = calculateRunningTotal(n, my_list)
    print(result)

# Test cases
def run_test_cases():
    # Test case 1
    assert calculateRunningTotal(3, [1, 2, 3]) == 4, "Test case 1 failed"
    print("Test case 1 passed: Input [1,2,3] -> Output 4")
    
    # Test case 2
    assert calculateRunningTotal(3, [80, 30, 31]) == 243, "Test case 2 failed"
    print("Test case 2 passed: Input [80,30,31] -> Output 243")

if __name__ == "__main__":
    # Run test cases first
    print("Running test cases...")
    run_test_cases()
    print("\nAll test cases passed!")
    print("\nNow accepting user input:")
    main()
