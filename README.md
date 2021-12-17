# Adote-um-pet
<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>
<p align="center">
<img src="./assets/Adoteumpet.gif" width="350" height="300"/>
</p>
<br>

## 💻 Sobre o projeto 

<br>

 API desenvolvida como Projeto Final com o auxílio da professora Paula Allemand para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Durante a pandemia muitos animais foram abandonados, aumentando consideravelmente o número de animais vivendo na rua. Um grupo de pessoas que já cuidava dos animais que viviam na rua, passou a receber estes animais em suas casas até encontrar um lar para cada um. Porém, o unico meio de divulgação dos animais disponíveis para adoção é o whatsApp, tornando o processo de adoção restrito, além de não existir um controle de animais adotados e ou disponíveis para adoção, já que eles permanecem em lares diferentes. 
Assim surgiu a ideia deste projeto, que é encontrar um lar reponsável para os animais que encontram-se abandonados, tendo um controle entre animais já adotados e os que ainda estão para adoção.


<p align="justify">Existem muitas pessoas que querem adotar um cão ou um gato, porém, na maioria das vezes estas pessoas não tem acesso ou conhecimento de onde encontrar estes animais, já que na cidade não existe um ambiente que seja referência onde estes animais possam permanecer enquanto aguardam ser adotados.


<p align="justify">É desejável futuramente, a implementação e ampliação deste projeto, para que além de encontrar o pet que procura para adotar, as pessoas possam também fazer a doação de alimentos, medicamentos, castrações e objetos nescessários para manter os cuidados com os animais de rua.


<br><br>

## 🚀 Descrição da API Adote um Pet

<br>

<p align="justify">O projeto é uma API REST que permite que os animais que estão disponíveis para adoção sejam cadastrados, mostrando quando estão disponíveis e também quando já tiverem sido adotados.


<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os animais que estão disponíveis para adoção.


  
<br>

## 🔗 Link 

- [Apresentação]()

<br>

## ⚙️ Funcionalidades/Objetivos

- Listar todos os animais que estão cadastrados no sistema;
- Listar animais por ID.
- Cadastrar pets que estejam em lares temporarios;
- Atualizar os dados desses pets, caso haja mudança de cidade.
- Deletar esse pet quando for adotado;
<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)


<br>

## 📁 Arquitetura MVC 

```
 📁 Adote-um-pet
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 adoteUmPetController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |
   |    |- 📁 models
   |         |- 📑 adoteUmPetSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 adoteUmPetRoutes.js 
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:9000

* Heroku: https://adote-2021.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para chamar e testar os endpoints da API localmente ou via Heroku

<br>

## 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:9000/`     |  Mensagem de apresentação (Index)    |              |

<br>

## 🔃 Manipulação das Rotas de Usuários:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/todos`                | Retorna todos os animais             |
| GET          | `/todos/:id`            | Retorna todos os animais por ID      |
| POST         | `/criar`                | Cria/cadastra um novo animais        |
| PUT          | `/atualizar/:id`        | Altera informações de um animais     |
| DELETE       | `/deletar/:id`          | Deleta um animais específico         |

<br>



## ✅ Dados para Collection Adote um Pet:

- id: gerado automaticamente 
- nome: texto e obrigatório
- cidade: texto e obrigatório
- animal: texto e obrigatório


<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    "message": "Cadastro realizado com sucesso",
    "cadastrarPets": {
        "nome": "Adote",
        "cidade": "Pesqueira",
        "animal": "cachorro",
        "_id": "61b966dc26f06dcbd505bbf6",
        "__v": 0
    }
}
```
 <br>



## 🚧 Melhorias para o futuro (Em construção)

<br>

* Realizar a construção do front-end
* Incrementar autenticação 
* Adicionar testes


Aceito sugestões que sejam viaveis para melhorar a vida destes animais que nos fazem tanto bem.

<br>

## 👨‍💻 Autora

<br>

<td align="center"><a href="https://github.com/KellyVieiras">
<img style="border-radius: 20%;" src="https://avatars.githubusercontent.com/u/88916083?v=4"
 width="200px;" alt=""/> </td><br> 


## [Kelly Vieira](https://github.com/KellyVieiras)
## [LinkedIn](https://www.linkedin.com/in/kelly-vieira/) 

<br>

## 🥰 Agradecimentos:

São tantas pessoas para agradecer! mas vamos por parte.
Foram muitas as pessoas que de forma direta ou indireta, colaboraram para que este momento de aprendizagem fluisse. Então primeiro agradeço a Deus, por ter dado a mim, o privilégio de viver estes momentos de aprendizagem com pessoas de corações tão bons. 
Agradeço a minha família que sempre me deixou quieta no quarto durante as aulas rsrs.
Agradeço a todas as professoras e monitoras, vocês são incriveis.
Agradeço as meninas do grupo reprogramadas, sempre tão solicitas e unidas.
E o meu agradecimento especial a Hannah Freitas e Raquel Andrade que me buscaram pela mão e me levantaram. Sem vocês, eu não teria chegado ao fim. 