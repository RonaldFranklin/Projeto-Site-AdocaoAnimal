# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na imagem abaixo.


![Diagrama de Componentes](https://user-images.githubusercontent.com/81657995/121273242-2e2cad80-c89e-11eb-9a1b-6ea987a81efb.png)



<center>Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Voluntários** - registro dos cadastros dos usuários que desejam se tornar voluntários nas ONG's 
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. A hospedagem foi realizada no prórpio GitHub.

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)


A imagem a seguir ilustra o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial,
em que no topo da página, é possível navegar entre as demais páginas
do site. Ná pagina principal, se tem um breve resumo sobre as demais
páginas do site, que possui um botão que direciona para a página.

O usuário pode navegar por outras quatro páginas além da principal.
A página de adoção, de doação, de voluntários e sobre. 

Na página de adoções, se encontra os animais cadastrados que estão 
disponíveis para a adoção, mostrando uma imagem, sexo e idade.
Ao clicar em algum animal, abre-se um modal com as informações
para entrar em contato com a organização que está em posse do animal.

Ná página de doações, encontra-se uma lista de máteriais que as ONG's 
necessitam para os cuidados dos animais e para manter o funcionamento
da mesma.

A página de voluntátios é onde se pode realizar o seu cadastro, para
poder contribuir com as ONG's com atividades. A página possui campos
que devem ser preenchidos para o envio do formulário.

A página sobre, é o local em que estão as informações sobre a organização
a equipe, os mootivos, os objetivos e os parceiros.


![Fluxo usuário](https://user-images.githubusercontent.com/81657995/121271922-199ae600-c89b-11eb-89ae-b68ba26151ea.png)



## Tecnologias Utilizadas

Para o desenvolvimento do projeto, utilizamos a linguagem HTML para a construção do conteúdo e da estruturação das páginas, a linguagem CSS para a estilização da página, e também a linguagem JavaScript para deixa o site dinâmico.
Utilizamos o Bootstrap como ferramenta Framework, fazendo o uso de suas bibliotecas para ajudar com o desenvolvimento do código do site.

Utilizamos também do JSON, para o armazenamento das informações do cadastro dos usuários no Local Storage do site.

Todo o código HTML, CSS e JavaScript foi desenvolvido utilizando o editor de códigos Visual Studio Code.

## Hospedagem

A hospedagem do site foi realizada pelo GitHub.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
