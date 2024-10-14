from main import deposit


def test_deposit() -> None:
    amount = deposit()
    assert amount == 100
    
def test_deposit_greater_than_zero() -> None:
    amount = deposit()
    assert amount > 0
    
def test_deposit_is_number() -> None:
    amount = deposit()
    assert type(amount) is int
