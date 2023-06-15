
it("the h1 contains the correct text", () => {
  cy.getByData("hero-heading").contains(
    "Testing Next.js Applications with Cypress"
  )
})