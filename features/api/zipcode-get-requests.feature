#language: pt

    Eu como usuário do Webservice ViaCEP
    Quero fazer uma requisição do tipo GET
    Para verificar o logradouro

    Esquema do Cenario: Consultar logradouro pelo CEP
        Dado que eu acesso o URL do ViaCEP
        Quando eu informo um <cep> no path do endpoint
        E faço uma requisição do tipo GET
        Então devo o <resultado> da pesquisa

        Exemplos:
            |cep        |resultado           |
            |14680-000  |Jardinópolis/SP     |
            |14340-000  |Brodowski/SP        |
            |14350-000  |Altinópolis/SP      |