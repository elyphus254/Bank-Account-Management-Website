# Bank Account Management Website

Welcome to the Bank Account Management website. This web application allows you to manage your bank account by depositing, withdrawing, and checking your account balance. Below, you'll find instructions on how to use the site, as well as an explanation of how classes, switch statements, and try-catch-finally statements were incorporated into the website's code.

## Instructions

1. **Account Information**: Enter your account holder name and account type in the respective input fields.

2. **Deposit**: To deposit money into your account, enter a positive amount in the "Amount" field and click the "Deposit" button. If the entered amount is invalid, you'll receive an error message. Otherwise, you'll see a success message with your updated account balance.

3. **Withdraw**: To withdraw money from your account, enter a positive amount in the "Amount" field and click the "Withdraw" button. Ensure you have sufficient funds. If the amount is invalid or if you have insufficient funds, you'll receive an error message. If the withdrawal is successful, you'll see a message with the withdrawal amount and your updated balance.

4. **Check Balance**: Click the "Check Balance" button to view your current account balance. You'll see your account holder name, account type, and the current balance.

## Code Explanation

### Classes

The website incorporates a `BankAccount` class to manage individual bank accounts. The class includes a constructor to initialize the account holder name, account type, and balance. It also includes methods for deposit, withdrawal, and checking the account balance. This class-based approach allows for better organization and extensibility as the application grows.

### Switch Statements

In the JavaScript code, switch statements are used to differentiate between deposit, withdrawal, and balance check operations. The `processOperation()` function takes an operation as an argument and uses switch statements to handle different operations. Each case in the switch statement performs the specific operation and returns an appropriate message.

### Try-Catch-Finally Statements

The code employs try-catch-finally statements to handle potential errors gracefully during deposit, withdrawal, and balance check operations. If an error occurs (e.g., invalid input, insufficient funds), it is caught by the catch block, and an error message is displayed to the user. The finally block can be used for any necessary cleanup or final steps, although it is currently empty in this example.

This combination of classes, switch statements, and try-catch-finally statements results in a more organized and robust Bank Account Management website. While this code provides a simplified example, it lays the foundation for building a more sophisticated and secure financial application in the future.

