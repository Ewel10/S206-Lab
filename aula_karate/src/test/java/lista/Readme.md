Com o maven configurado e o diretório correto, rode os testes com o seguinte comando:
mvn test -Dtest=RickMortyRunner


Foram criados 6 casos de teste:
1- Verificar cabeçalho de um personagem qualquer
2- Testando o que acontece quando eu entro com um personagem que não existe (negativo)
3- Testando JSON do personagem 415
4- Atestando que não se sabe se o Plane Crash Survivor está vivo ou morto
5- Atestando que o Morty não tem o id = 415 (negativo)
6- Verficando se o Morty é um homem humano vivo de id 2


Para se obter o relatório de testes, basta rodar o código e ir no aula_karate/target/karate-reports e abrir o lista.rickMorty.HTML
