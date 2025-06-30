# Manual Test Cases – QA Code Quiz

## 1. Login Page - Empty Input Validation
- ✅ Step: Load the login page.
- ✅ Action: Click "LOGIN" without entering username or password.
- ✅ Expected Result: Nothing Happend and Nothing Show.

## 2. Login Page - Invalid Credentials
- ✅ Step: Enter `SomeUser_name` and incorrect password like `wrongpass`.
- ✅ Action: Click "LOGIN".
- ✅ Expected Result: Nothing Show.

## 3. Login Page - Correct Credentials
- ✅ Step: Enter valid credentials:
  - Username: `SomeUser_name`
  - Password: `TopSecret1234!`
- ✅ Action: Click "LOGIN".
- ✅ Expected Result: Dashboard is shown with:
  - Greeting: "Hello SomeName"
  - Favourite Fruit, Movie, Number visible.

## 4. Logout Functionality
- ✅ Step: After logging in, click "LOGOUT".
- ✅ Expected Result: User is redirected to login form again.

## 5. Input Field Behavior
- ✅ Step: Focus each input field
- ✅ Expected Result: Border color changes on focus.
