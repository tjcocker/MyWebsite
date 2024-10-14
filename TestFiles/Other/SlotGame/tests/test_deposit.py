from main import deposit

def test_deposit() -> None:
    amount = deposit(100)
    assert amount == 100
    
def test_deposit_greater_than_zero() -> None:
    amount = deposit(100)
    assert amount > 0
    
def test_deposit_is_number() -> None:
    amount = deposit(100)
    assert type(amount) is int

# @pytest.fixture 
# def input_value(): 
#    input = 100
#    return input

# def test_deposit() -> None:
#     amount = input_value
#     assert amount == 100
    
# def test_deposit_greater_than_zero() -> None:
#     amount = input_value
#     assert amount > 0
    
# def test_deposit_is_number() -> None:
#     amount = input_value
#     assert type(amount) is int