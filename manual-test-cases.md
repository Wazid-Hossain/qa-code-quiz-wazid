# Manual Test Cases

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



# 🧪 Manual Test Cases

This manual test scenarios to ensure the login portal behaves as expected under common and edge-case conditions.

---


## ✅ Test Case Table

| TC ID | Title                        | Steps                                                                  | Test Data                          | Expected Result                                                                            |
| ----- | ---------------------------- | ---------------------------------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------ |
| TC01  | Login with valid credentials | 1. Go to login page 2. Enter username 3. Enter password 4. Click LOGIN | `SomeUser_name` / `TopSecret1234!` | Redirects to dashboard showing name: Hello SomeName and details like fruit, movie, number. |
| TC02  | Invalid password             | 1. Enter username 2. Enter wrong password 3. Click LOGIN                | `SomeUser_name` / admin123         | Remains on login page. No user data shown.                                                 |
| TC03  | Invalid username             | 1. Enter wrong username 2. Enter valid password 3. Click LOGIN           | `admin / ``TopSecret1234!`         | Remains on login page.  No user data shown.                                                |
| TC04  | Empty fields                 | 1. Leave both username and password empty 2. Click LOGIN                | *Empty input*                      | Remains on login page. Form should not crash.                                              |
| TC05  | Logout from account          | 1. Log in successfully 2. Click LOGOUT                                 | Logged-in session                  | Returns to login page.                                                                     |
| TC06  | Display user data post login | 1. Log in as `SomeUser_name`                                           | `SomeUser_name`                    | Page shows: Name, Favourite Fruit, Favourite Movie, Favourite Number                       |
| TC07  | Password field is secure     | 1. Focus on password field 2. Type password                             | `TopSecret1234!`                   | Password should appear as dots, not plain text.                                            |
| TC08  | Field border focus color     | 1. Click into input fields                                             | Any text                           | Border color should change (styled-components CSS rule).                                   |
| TC09  | Login as second user         | 1. Enter `dummytree` / `test1` 2. Click LOGIN                           | `dummytree` / `test1`              | Might fail if name key is missing. Check how UI handles fallback or crash.                 |
| TC10  | Refresh after login          | 1. Log in 2. Refresh browser tab                                        | Session active                     | Check if state is retained or if user gets logged out (based on persistence).              |
