# Freterapido

## Observaçoes

Eu fiz o projeto utilizando Nx para melhor organizar as libraries e funcionar parecido como bibliotecas em monorepo. Mas caso isso seja um problema,
eu também criei uma branch chamda `default-angular` com uma estrutura Angular padrão em modulos e arquivos compartilhados. PS: para essa branch eu
não organizei os unit tests pois precisava converter de jest para jasmine, mas a branch `main` está com os unit tests criados (principalmente
no feature-dashboard que é onde está mais concentrado a lógica).

## Como rodar localmente

Para rodar em ambiente de desenvolvimento, primeiro é necessário rodar:

`npm install`

Após instalada as dependências, rode:

`npm start`

A aplicação irá subir na url <http://localhost:4200>

## Como buildar o projeto

Para gerar um build do projeto, é preciso rodar:

`npm run build`

Uma nova pasta será criada em `dist/freterapido` contendo todos os arquivos da versão.

## Como rodar o projeto em um Docker

Uma imagem docker foi buildade e disponibilizada no Docker Hub

Para utilizar, basta rodar o comando a seguir para subir na porta 8080.

`docker run -d -p 8080:80 paulortesjr/freterapido:latest`

Após subir, basta acessar na url <http://localhost:8080>
