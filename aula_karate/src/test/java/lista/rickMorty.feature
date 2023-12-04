Feature: Lista ex Karate

Background: Base para a API de Rick and Morty
        * def url_base = 'https://rickandmortyapi.com/'

Scenario: Verificar cabeçalho de um personagem qualquer
        Given url url_base
        And path 'api/character/415'
        When method head
        Then status 200

Scenario: Testando o que acontece quando eu entro com um personagem que não existe (negativo)
        Given url url_base
        And path 'api/character/2389472934'
        When method head
        Then status 404

Scenario: Testando JSON do personagem 415
        Given url url_base
        And path 'api/character/415'
        When method get
        Then status 200
        And match response.species == "Human"
        And match response.name == "Pro trunk people marriage guy"
        And match response.id == 415

Scenario: Atestando que o Morty não tem o id = 415
        Given url url_base
        And path 'api/character/415'
        When method get   
        Then status 200
        And match response.name != "Morty Smith"

Scenario: Atestando que o Morty não tem o id = 415 (negativo)
        Given url url_base
        And path 'api/character/415'
        When method get   
        Then status 200
        And match response.name != "Morty Smith"

Scenario: Verficando se o Morty é um homem humano vivo de id 2
        Given url url_base
        And path 'api/character/002'
        When method get   
        Then status 200
        And match response.species == "Human"
        And match response.gender == "Male"
        And match response.status == "Alive"
        And match response.id == 2