describe('Criando cenário de testes para um mini pokedex', () => {
  it('Caso de teste: Acessando o Sprigatito e sua ultima evolução, Meowscarada e verificando seus nomes', () => {

    cy.visit('https://pokemondb.net/pokedex/stats/gen9')
    cy.get(':nth-child(6) > .cell-name > .ent-name').click()
    cy.get('h1').should('contain.text', 'Sprigatito')
    cy.get(':nth-child(5) > .infocard-lg-data > .ent-name').click()
    cy.get('h1').should('contain.text', 'Meowscarada')
  
  })

  it('Caso de teste: Pesquisando pelo pokémon fuecoco e verificando que sua evolução não é charizard (teste de falha)', () => {
    pesquisarFuecoco()
    cy.get(':nth-child(5) > .infocard-lg-data > .ent-name').click()
    cy.get('h1').should('not.eq', 'Charizard')
  })

  it('Caso de teste: Pesquisando pelo pokémon fuecoco e verificando que sua habilidade é a mesma que a do Scorbunny', () => {
    pesquisarFuecoco();

    let habilidadeFuecoco;
    cy.get('td > span.text-muted > a').invoke('text').then((habilidade) => {
      habilidadeFuecoco = habilidade;
 
      cy.get('td > span.text-muted > a').click();
  
      cy.get(':nth-child(23) > .cell-name > .ent-name').click();

      cy.get('td > span.text-muted > a').should('contain.text', habilidadeFuecoco);
    });
  });
  })

  function pesquisarFuecoco(){

    let pokemon = "fuecoco"
  
      cy.visit('https://pokemondb.net/pokedex/stats/gen9')
      cy.get('#sitesearch').type(pokemon)
      cy.get('#sitesearch').type('{enter}')
      cy.get(':nth-child(1) > .gs-webResult > .gsc-thumbnail-inside > div.gs-title > .gs-title > b').click()
  }