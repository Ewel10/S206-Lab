Feature: Testando API Pokemon

Background: Executa antes de cada teste
    * def url_base = 'https://pokeapi.co/api/v2'

Scenario: Testando retorno de pokemon/bulbasaur
    Given url 'https://pokeapi.co/api/v2/pokemon/bulbasaur'
    When method get
    Then status 200

Scenario: Testando retorno de pokemon/ com informações inválidas.
    Given url 'https://pokeapi.co/api/v2/pokemon/bolacha'
    When method get
    Then status 404

Scenario: Testando retorno bulbasaur e verificando o JSON.
     Given url url_base
     And path '/pokemon/bulbasaur'
     When method get
     Then status 200
     And match response.name == 'bulbasaur'
     And match response.id == 1

Scenario: Testando jogo red
    Given url url_base
    And path '/version/1'
    When method get
    Then status 200
    And def idioma = $.names[5].url
    And print idioma
    And url idioma
    When method get
    Then match response.name == "es"
    And match responde.id == 7