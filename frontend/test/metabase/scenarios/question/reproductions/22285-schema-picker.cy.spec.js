import { restore, startNewQuestion, popover } from "__support__/e2e/helpers";

describe("issue 22285", () => {
  beforeEach(() => {
    restore();
    cy.signInAsAdmin();

    cy.intercept("GET", "/api/database").as("fetchDatabases");

    cy.intercept("GET", "/api/database/*/schemas", {
      body: ["PUBLIC", "FAKE SCHEMA"],
    });
  });

  it("should not clean DB schemas list in the data selector (dataman#22285)", () => {
    startNewQuestion();
    cy.wait("@fetchDatabases");

    popover().within(() => {
      cy.findByText("Sample Database").click();

      cy.findByText(/Fake Schema/i);
      cy.findByText(/Public/i).click();
      cy.findByText("Orders");

      // go back to database picker
      cy.icon("chevronleft").click();

      cy.findByText(/Fake Schema/i);
      cy.findByText(/Public/i);
    });
  });
});
