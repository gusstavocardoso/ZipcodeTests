#language: pt

    Eu como usuário dos Correios 
    Quero consultar um CEP
    Para verificar o logradouro

    Esquema do Cenario: Consultar logradouro pelo CEP
        Dado que eu acesso a página dos Correios
        Quando eu informo um <cep> no campo de pesquisa
        E clico em pesquisar
        Então devo o <resultado> da pesquisa

        Exemplos:
            |cep        |resultado           |
            |14680-000  |Jardinópolis/SP     |
            |14340-000  |Brodowski/SP        |
            |14350-000  |Altinópolis/SP      |    