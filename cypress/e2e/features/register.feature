Feature: Cadastro de usuarios
Cadastro de usuarios na plataforma 

Scenario Outline: "<caso_teste>"
Given que estamos na page de Cadastro
And inserimos nosso Nome "<name>" e Sobrenome "<surname>"
And informarmos nossos dados de contato  "<address>",  "<email>" e "<phone>"
And nosso genero como  "<gender>" e hobbies  "<hobbies>"
And nossa skill "<skill>" e nosso pais "<country>"
When eu selecionar meu nascimento "<year>", "<month>" e "<day>"
And inserir minhas senhas "<pass>" e "<confirm_pass>"
And clico no botão cadastrar
Then tenho meu cadastro finalizado com sucesso

Examples:
    |caso_teste          |name |surname |address   |email          |phone       |gender|hobbies|skill |country|year|month  |day|pass    |confirm_pass |
    |Cadastro com sucesso|Rauni|Fabricio|Rua X, 100|rauni@gmail.com|1199708563|Male  |Movies |Python|Japan  |1999|January|10 |1234@123|1234@123     |