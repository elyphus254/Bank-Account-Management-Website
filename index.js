class BankAccount {
    constructor(accountHolder, accountType) {
        this.accountHolder = accountHolder;
        this.accountType = accountType;
        this.balance = 0;
    }

    deposit(amount) {
        if (isNaN(amount) || amount <= 0) {
            throw new Error('Invalid deposit amount.');
        }
        this.balance += amount;
        return `Account Holder: ${this.accountHolder}<br>Account Type: ${this.accountType}<br>Deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount) {
        if (isNaN(amount) || amount <= 0) {
            throw new Error('Invalid withdrawal amount.');
        }
        if (this.balance < amount) {
            throw new Error('Insufficient funds.');
        }
        this.balance -= amount;
        return `Account Holder: ${this.accountHolder}<br>Account Type: ${this.accountType}<br>Withdrew $${amount}. New balance: $${this.balance}`;
    }

    checkBalance() {
        return `Account Holder: ${this.accountHolder}<br>Account Type: ${this.accountType}<br>Balance: $${this.balance}`;
    }
}

function processOperation(operation) {
    const amount = parseFloat(document.getElementById('amount').value);
    const accountHolder = document.getElementById('accountHolder').value;
    const accountType = document.getElementById('accountType').value;

    const bankAccount = new BankAccount(accountHolder, accountType);

    try {
        switch (operation) {
            case 'deposit':
                return bankAccount.deposit(amount);

            case 'withdraw':
                return bankAccount.withdraw(amount);

            case 'checkBalance':
                return bankAccount.checkBalance();

            default:
                throw new Error('Invalid operation.');
        }
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

function displayResult(message) {
    document.getElementById('result').innerHTML = message;
}
