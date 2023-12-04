Feature: Testes para prova S206

Background: Base para a API de Pokémon
        * def url_base = 'https://pokeapi.co/api/v2/'

Scenario: Verificar cabeçalho do pokémon bulbasaur (usando o método head)
        Given url url_base
        And path 'pokemon/bulbasaur'
        When method head
        Then status 200

Scenario: Testando o que acontece quando eu entro com um nome errado no cabeçalho
        Given url url_base
        And path 'pokemon/bullbasaur'
        When method head
        Then status 404

Scenario: Testando JSON do bulbasaur, vendo se seu tamanho e experiencia estão certos
        Given url url_base
        And path 'pokemon/bulbasaur'
        When method get
        Then status 200
        And match response.height == 7
        And match response.weight == 69
        And match response.base_experience == 64

Scenario: Testando se o aegislash evolui do doublade, utilizando um def para salvar o nome
        Given url url_base
        And path 'pokemon-species/aegislash'
        When method get
        Then status 200
        And def evolui_de = response.evolves_from_species.name
        And match evolui_de == "doublade"
        When method get
        Then status 200

Scenario: Testando que o pokémon pikachu tem um id diferente de 123
        Given url url_base
        And path 'pokemon/pikachu'
        When method get   
        Then status 200
        And match response.id != 123