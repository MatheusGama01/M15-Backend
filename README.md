
# 🚀 M15 - BACKEND

O Objetivo do projeto é que você nunca perca os filmes que você assistiu,o M15 te dará a oportunidade de salvar o Nome, Diretor,Genêro além de poder dá a  sua opnião.  


# ⚠️ Pré-requisitos

*  Instalar Node js.

```bash
   https://nodejs.org/en/
```
* IDE de sua preferência.
# 💡Tecnologias Usadas

* Node.JS
* Bcrypt
* Cors
* Dotenv
* Express
* JSON Web Token
* MongoDB
* Heroku 
* JavaScript
# ⚙️ Instalação


* Instale o  Express

```bash
  npm install express 
```
* Instale o Bcrypt 

```bash
  npm install bcrypt
```

* Instale o Cors

```bash
  npm install Cors
```

* Instale o Dotenv 
```bash
  npm install dotenv --save
```

* Instale o JSON Web Token
```bash
  npm install jsonwebtoken
```

* Instale o Moongose
```bash
  npm install mongoose
```







    
# 🔦 Endpoints

#### Cadastra usuário

```http
  GET /cadastro
```
#### Fazer login

```http
  POST /login
```
#### Retorna o perfil do usuário

```http
  GET /perfil/:id

```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token |

#### Atualiza o perfil do usuário

```http
  PUT /perfil/atualizar/:id
```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |


#### Apaga o perfil do usuário

```http
  DELETE /perfil/apagar/:id
```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |



#### Retorna todos os perfis cadastrados

```http
  GET /perfil
```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |


#### Atualiza o perfil

```http
  PUT /admin/perfil/atualizar/:id

```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |


#### Cadastra o filme

```http
  POST /filme/cadastro
```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |

#### Retorna todos os filmes

```http
  GET /filme
```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |

#### Retorna o filme por id

```http
  GET /filme/:id

```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |


#### Atualiza o filme 

```http
  PUT /filme/atualizar/:id
```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |


#### Apaga o filme 

```http
  DELETE /filme/apagar/:id
```
| Descrição                           |
| :---------------------------------- |
| **Obrigatório**. Token              |














# 🔥 Autores

- [Gabriele Cardoso](https://github.com/2433461)
- [Matheus Gama](https://github.com/MatheusGama01)
- [André Luis](https://github.com/andreluizang)
 # 😊  Orientadores 
 
- [Raissa Arruda]()
- [Hissamu Shirado]()
- [Andreia Machion]()
- [Thomas Jefferson]()
