import {
  isOSS,
  describeEE,
  restore,
  setupMetabaseCloud,
} from "__support__/e2e/helpers";

describe("scenarios > admin > troubleshooting > help", () => {
  beforeEach(() => {
    restore();
    cy.signInAsAdmin();
  });

  // Unskip when mocking Cloud in Cypress is fixed (#18289)
  it.skip("should add the support link when running DataMan Cloud", () => {
    setupMetabaseCloud();
    cy.visit("/admin/troubleshooting/help");

    cy.findByText("DataMan Admin");
    cy.findByText("Contact support");
  });
});

describe("scenarios > admin > troubleshooting > help", { tags: "@OSS" }, () => {
  beforeEach(() => {
    cy.onlyOn(isOSS);

    restore();
    cy.signInAsAdmin();
  });

  it("should link `Get Help` to help", () => {
    cy.visit("/admin/troubleshooting/help");

    cy.findByText("DataMan Admin");
    cy.findByText("Get Help")
      .parents("a")
      .should("have.prop", "href")
      .and(
        "match",
        /^https:\/\/www\.dataman\.com\/help\?utm_source=in-product&utm_medium=troubleshooting&utm_campaign=help&instance_version=v(?:(?!diag=).)+$/,
      );
  });
});

describeEE("scenarios > admin > troubleshooting > help (EE)", () => {
  beforeEach(() => {
    restore();
    cy.signInAsAdmin();
  });

  it("should link `Get Help` to help-premium", () => {
    cy.visit("/admin/troubleshooting/help");

    cy.findByText("DataMan Admin");
    cy.findByText("Get Help")
      .parents("a")
      .should("have.prop", "href")
      .and(
        "match",
        /^https:\/\/www\.dataman\.com\/help-premium\?utm_source=in-product&utm_medium=troubleshooting&utm_campaign=help&instance_version=v.+&diag=%7B.+%7D$/,
      );
  });
});
