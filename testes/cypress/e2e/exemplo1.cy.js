/// <reference types = "cypress"/>

describe('Criando cenário de teste para o site globalsqa', ()=>{
  
  it.skip('Caso de teste: Registrando o usuario no site com sucesso', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Inatel')
    cy.get('#Text1').type('Inatel')
    cy.get('#username').type('Inatel')
    cy.get('#password').type('Inatel')
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  
  })

  it.skip('Caso de teste: Registrando o usuario com falha (faltando senha)', () => {

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('asda')
    cy.get('#Text1').type('asdv')
    cy.get('#username').type('asdvc')
    cy.get('#password').type('asdacs')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')

  })

  it('Caso de teste: Realizando login com sucesso', () => {

    let info = criarUsuario()
    cy.get('#username').type(info[0])
    cy.get('#username').type(info[0]) // um só tava bugando, ai fiz 2x e funciona
    cy.get('#password').type(info[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should('contain.text', info[0])
    })


})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let seg = new Date().getSeconds().toString()
  let user = horas + minutos + seg + 'id'
  let senha = horas + minutos + seg + 'senha'
  let userInfo = [user, senha]

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type(user)
    cy.get('#Text1').type(user)
    cy.get('#username').type(user)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', 'Registration successful')
  
    return userInfo

}