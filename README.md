# Teste Técnico FullStack - NicePlanet

## Sobre o projeto
Este projeto consiste em: 
- um banco de dados MySQL preenchido através de um dump para teste
- um backend em Node.JS que oferece uma API para acesso aos dados mediante login válido
- um frontend em Vue.JS que permite a um usuário autenticado acessar os dados disponibilizados pelo backend.

## Funcionalidades
O usuário desse projeto pode buscar pelas propriedades armazenadas no banco de dados da aplicação através do seu número de Cadastro Ambiental Rural (CAR). A partir dessa pesquisa, se houver cadastro referente ao CAR pesquisado, dados sobre a propriedade são exibidos, ao mesmo tempo que uma avaliação com os dados da busca são armazenados em banco para futura consulta.

## Configuração
Configurar os contâineres com o comando
```
  docker compose build
```

## Execução
Executar os contâineres com o comando
```
  docker compose up
```

## Acesso ao Frontend
Após a configuração e execução dos contâineres, acesse o frontend através do endereço http://locahost:5000

## Dados de login
```
  usuário: administrado@email.com
  senha:   root
```
