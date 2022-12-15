<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">
   <a href="#"> Notification Service </a>
</h1>

<h3 align="center">
Notification Micro Service
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/arubesu/notification-service">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/arubesu/notification-service">

  <a href="https://github.com/arubesu/notification-service/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/arubesu/notification-service">
  </a>
    <img alt="Status" src="https://img.shields.io/badge/Status-Finished-green">
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#pre-requisites">Pre-requisites</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#contributors">Contributors</a> • 
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>

</p>


## About

Project developed during  ignite lab  offered by [Rocketseat](https://blog.rocketseat.com.br/). 

---

## Features

- [x] Send Notification
- [x] Cancel Notification
- [x] Read Notification
- [x] Unread Notification
- [x] Unread Notification
- [x] Count Notifications by recipient
- [x] List Notifications by recipient

---
### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

#### Running Backend (server)

```bash

# Clone this repository
$ git clone git@github.com:arubesu/notification-service.git

# Access the project folder cmd/terminal
$ cd notification-service

# install the dependencies
$ yarn install

#run migrations 
yarn prisma migrate dev     

# Run the application in development mode
$ yarn start:dev

# The server will start at port: 3000 - go to http://localhost:3000

```

## Test

```bash
# unit tests
$ yarn test
```
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Notifications%20Service&uri=https%3A%2F%2Fraw.githubusercontent.com%2Farubesu%2Fnotification-service%2Fmaster%2Finsomnia%2Fnotifications-service.json)


---

## Tech Stack

The following tools were used in the construction of the project:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  )

-   **[Nestjs](https://nestjs.com)**
-   **[Prisma](https://www.prisma.io)**
-   **[Jest](https://jestjs.io/)**

> See the file  [package.json](https://github.com/arubesu/notification-service/blob/master/package.json)

#### **Tools**

-   Rest Client:  **[Insomnia](https://insomnia.rest/)**
---
## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
> If you have any questions check this [guide on how to contribute](https://github.com/firstcontributions/first-contributions)

---

## Author

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/29710382?v=4" width="100px;" alt="Bruno Souza"/>
 <br />

 [![Linkedin Badge](https://img.shields.io/badge/-Bruno_Souza-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/bruno-a-souza/)](https://www.linkedin.com/in/bruno-a-souza/) 
---

## License

This project is under the license [MIT](./LICENSE).

Made with ❤️  by Bruno Souza 👋🏽 [Get in Touch!](https://www.linkedin.com/in/bruno-a-souza/)