describe('init', () => {
  it('site is correct and online', () => {
    cy.visit('https://google.com') //substituir pelo site em questão

    cy.title()
    .should('include', 'Google') //verifica se tema do site na aba está certo
  })
})