/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Usability should work as expected', () => {
    // **** LOAD DEFAULT DATASET (1234) ****

    // Assert that the data loaded by default (JSON-1234) shows the correct results for each of the dashboard tiles
    cy.get('[data-testid="tile-value-Mean"]').should('have.text', '49.457050');

    cy.get('[data-testid="tile-value-Median"]').should('have.text', '49.000000');

    cy.get('[data-testid="tile-value-Std Deviation"]').should('have.text', '28.810315');

    cy.get('[data-testid="tile-value-Mode"]').should('have.text', '77.000000');

    // Assert that the input has what we expect
    cy.get('[data-testid="datapoint"]')
      .should('have.attr', 'placeholder', 'Enter a number')
      .should('have.attr', 'tabindex', '0');

    // Assert that the submit button behaves as we expect
    cy.get('[data-testid="submit-btn"]')
      .should('be.disabled')
      .should('have.text', 'Submit')
      .should('have.attr', 'tabindex', '-1');

    // **** UPDATE 1234 DATASET WITH NEW DATAPOINT (42) ****

    // Assert that entering a value enables the submit button
    cy.get('[data-testid="datapoint"]').type(42);
    cy.get('[data-testid="submit-btn"]').should('not.be.disabled').click();

    // Assert that after entering a new value then clicking the submit button that the state of the dashboard tiles get updated with the correct results
    cy.get('[data-testid="tile-value-Mean"]').should('have.text', '49.451012');

    cy.get('[data-testid="tile-value-Median"]').should('have.text', '49.000000');

    cy.get('[data-testid="tile-value-Std Deviation"]').should('have.text', '28.799421');

    cy.get('[data-testid="tile-value-Mode"]').should('have.text', '77.000000');

    // **** CLICK TO LOAD 4321 DATASET ****

    // Assert that changing the dataset (JSON-4321) will update our dashboard tiles with the correct results
    cy.get('[data-testid="btn-4321"]').should('have.text', 'Reload JSON-4321 Data').click();

    cy.get('[data-testid="tile-value-Mean"]').should('have.text', '50.346679');

    cy.get('[data-testid="tile-value-Median"]').should('have.text', '51.000000');

    cy.get('[data-testid="tile-value-Std Deviation"]').should('have.text', '29.191159');

    cy.get('[data-testid="tile-value-Mode"]').should('have.text', '82.000000');

    // **** UPDATE 4321 DATASET WITH NEW DATAPOINT (42) ****

    // Assert that entering a value enables the submit button
    cy.get('[data-testid="datapoint"]').type(42);
    cy.get('[data-testid="submit-btn"]').should('not.be.disabled').click();

    // Assert that after entering a new value then clicking the submit button that the state of the dashboard tiles get updated with the correct results
    cy.get('[data-testid="tile-value-Mean"]').should('have.text', '50.344748');

    cy.get('[data-testid="tile-value-Median"]').should('have.text', '51.000000');

    cy.get('[data-testid="tile-value-Std Deviation"]').should('have.text', '29.188057');

    cy.get('[data-testid="tile-value-Mode"]').should('have.text', '82.000000');

    // **** CLICK TO LOAD 1234 DATASET (SHOW THE DEFAULT DATASET) ****

    // Assert that the elements are what they should be
    cy.get('[data-testid="btn-1234"]').should('have.text', 'Reload JSON-1234 Data').click();

    cy.get('[data-testid="tile-value-Mean"]').should('have.text', '49.457050');

    cy.get('[data-testid="tile-value-Median"]').should('have.text', '49.000000');

    cy.get('[data-testid="tile-value-Std Deviation"]').should('have.text', '28.810315');

    cy.get('[data-testid="tile-value-Mode"]').should('have.text', '77.000000');
  });
});
