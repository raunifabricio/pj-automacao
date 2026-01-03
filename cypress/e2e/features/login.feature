Feature: Login
Funcionalidade para realizar variados Logins no sistema PHPTravels

Scenario Outline: "<cenario>"
    Given eu acesse a pagina home da aplicacao
    When eu inserir meu email "<email>" e minha "<senha>"
    And clicar no botao entrar
    Then tenho meu acesso "<>"

    Examples:
        | cenario           | email               | senha    | mensagem                 | 
        | Login com sucesso | user@phptravels.com | demouser | com sucesso na aplicacao |