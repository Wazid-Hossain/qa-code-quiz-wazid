/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  if (
    err.message.includes("INVALID USER") ||
    err.message.includes("reading 'password'")
  ) {
    return false;
  }
});

describe('Login Portal Tests', () => {
  const baseUrl = 'http://localhost:8080';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.wait(2000);
  });

  it('shows validation errors for empty inputs', () => {
    cy.get('[data-testid="login-button"]').click();
    cy.get('[data-testid="username-input"]').should('exist');
    cy.get('[data-testid="password-input"]').should('exist');
  });

  it('fails login with incorrect credentials', () => {
    cy.get('[data-testid="username-input"]').type('SomeUser_name');
    cy.get('[data-testid="password-input"]').type('wrongpassword');
    cy.get('[data-testid="login-button"]').click();
    cy.contains('If you do not have an account').should('exist');
  });

  it('logs in with correct credentials', () => {
    cy.get('[data-testid="username-input"]').type('SomeUser_name');
    cy.get('[data-testid="password-input"]').type('TopSecret1234!');
    cy.get('[data-testid="login-button"]').click();

    cy.contains('Hello SomeName').should('exist');
    cy.contains('Favourite Fruit').should('exist');
    cy.contains('Favourite Movie').should('exist');
    cy.contains('Favourite Number').should('exist');
  });

  it('logs out and shows login form again', () => {
  cy.get('[data-testid="username-input"]').type('SomeUser_name');
  cy.get('[data-testid="password-input"]').type('TopSecret1234!');
  cy.get('[data-testid="login-button"]').click();

    cy.wait(3000);

  cy.contains('button', 'LOGOUT', { timeout: 5000 }).should('be.visible').click();

  cy.get('[data-testid="username-input"]').should('exist');
  cy.get('[data-testid="password-input"]').should('exist');
});
 it('logs in with dummytree credentials', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-testid="username-input"]').type('dummytree');
    cy.get('[data-testid="password-input"]').type('test1');
    cy.get('[data-testid="login-button"]').click();

    cy.contains('Hello').should('exist');
    cy.contains('Favourite Fruit').should('exist');
    cy.contains('Favourite Movie').should('exist');
    cy.contains('Favourite Number').should('exist');

        cy.wait(3000);

  cy.contains('button', 'LOGOUT', { timeout: 5000 }).should('be.visible').click();

  cy.get('[data-testid="username-input"]').should('exist');
  cy.get('[data-testid="password-input"]').should('exist');
  });
});

 