# QA Code Quiz – Cypress & Manual Testing ✅

I’m Wazid Hossain. This is my QA challenge project where I tested a login portal using both **automated (Cypress)** and **manual** testing approaches.

---

## 🔧 What I Tested

✅ Login functionality   
✅ Logout behavior  
✅ Post-login content  
✅ UI interaction

---

## 🚀 Automation with Cypress

- Cypress tests are located in: `cypress/e2e/login_spec.cy.ts`
- Each test includes:
  - Validation for empty input
  - Wrong credentials handling
  - Successful login & content check
  - Logout and return to login form

### 🧪 How to Run

```bash
npm install
npm run start
npx cypress run



## 📄 Manual Testing

🧪 View all manual test cases here:  
👉 [Manual Test Cases](manual-test-cases.md)

Covers:
- Valid and invalid login scenarios
- UI behavior (e.g. focus, input validation)
- Logout and session behavior



## 🔁 Changes Made for Testability

| File          | Change                                                | Why                                           |
|---------------|--------------------------------------------------------|-----------------------------------------------|
| `Login.tsx`   | Added `data-testid` to inputs & button                 | Makes them selectable in Cypress              |
| `auth.tsx`    | Fixed null `password` error                            | Prevents app crash on login attempt           |
| Logout button | Used `cy.contains('LOGOUT')` instead of `data-testid` | It didn’t originally have a `data-testid`     |
| `cypress.yml` | Created GitHub Actions CI workflow                     | Automates testing on push / pull request      |


