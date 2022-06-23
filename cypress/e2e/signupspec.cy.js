/* eslint-disable no-undef */
import {firstname, lastname, middlename, phone, DOB, address} from '../fixtures/signupData';

describe('signup tests', () => {
  it('sign up with user details', () => {
    cy.visit('/').as('sign up page').then(() => {
      cy.url().should('contain', 'localhost:3000');
    })
    cy.request("/").then((response) => {
      expect(response.status).to.eq(200);
    })

    cy.get('input[data-test-id="first-name"]').type(firstname)
      .get('input[data-test-id="middle-name"]').type(middlename)
      .get('input[data-test-id="last-name"]').type(lastname)
      .get('input[data-test-id="phone-number"]').type(phone)
      .get('input[data-test-id="dob"]').type(DOB)
      .get('textarea[data-test-id="address"]').type(address)
      .get('[data-test-id="submit-btn"]').click().then(() => {
        cy.get('[data-test-id="user-info"]').should('be.visible')
      })
  })


  it("minimum requirement validation test on firstname field", () => {
    cy.get('input[data-test-id="first-name"]').type("K").then(()=> {
      cy.contains('Must be between 2 and 10 chars').should('be.visible')
      .invoke('css', 'color')
      .should('equal', 'rgb(255, 100, 124)')
    })
  })

  it("maximum requirement validation test on firstname field", () => {
    cy.get('input[data-test-id="first-name"]').clear().type('myFirstname')
    .then(() => {
      cy.contains('Must be between 2 and 10 chars').should('be.visible')
      .invoke('css', 'color')
      .should('equal', 'rgb(255, 100, 124)')
    })
  })


  it("minimum requirement validation test on lastname field", () => {
    cy.get('input[data-test-id="last-name"]').type("L").then(()=> {
      cy.contains('Must be between 2 and 10 chars').should('be.visible')
      .invoke('css', 'color')
      .should('equal', 'rgb(255, 100, 124)')
    })
  })

  it("maximum requirement validation test on lastname field", () => {
    cy.get('input[data-test-id="last-name"]').clear().type('myLastnamedat')
    .then(() => {
      cy.contains('Must be between 2 and 10 chars').should('be.visible')
      .invoke('css', 'color')
      .should('equal', 'rgb(255, 100, 124)')
    })
  })

  it("maximum phone digits required test", () => {
    cy.get('input[data-test-id="phone-number"]').type("024055555555")
    .then(() => {
      cy.contains('Phone number must be 10 digits').should('be.visible')
      .invoke('css', 'color')
      .should('equal', 'rgb(255, 100, 124)')
    })
  })
})