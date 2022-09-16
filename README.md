![Logo TiControla](https://user-images.githubusercontent.com/102192917/184401954-7b7c706b-c287-4c22-83b0-a3039213c627.jpg)

# Visão Geral
TiControla é um aplicativo feito com o objetivo de auxiliar as finanças do usuário, organizando categorias de gastos e o notificando quando um limite é encontrado. 

Estes repositórios são dedicados para o desenvolvimento do software **TiControla**. O repositório principal é o FrontEnd, parente dos repositórios [BackEnd](https://github.com/fga-eps-mds/2022-1-TiControla-BackEnd/edit/main/README.md) e [Docs](https://github.com/fga-eps-mds/2022-1-TiControla-Docs). As issues estão sendo levantadas somente neste repositório. O guia de contribuição está no seguinte link: https://github.com/fga-eps-mds/2022-1-TiControla-Docs/blob/main/CONTRIBUTING.md


# Como emular o aplicativo
É necessário ter instalados o node (npm), o expo e o android studio. Também é necessário configurar as variáveis de ambiente de forma adequada, e configurar um emulador por meio do android studio.

```
# clone o repositório
git clone https://github.com/fga-eps-mds/2022-1-TiControla-FrontEnd.git

# vá para a pasta react-app
cd 2022-1-TiControla-FrontEnd/react-app

# instale as dependências
npm install

# Rode o emulador. Caso solicite o nome de um pacote, use o nome "ti.controla.app"
expo run:android
```
