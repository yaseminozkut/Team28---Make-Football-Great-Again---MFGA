# Make-Football-Great-Again---MFGA


Our deployed website:
https://mfga.herokuapp.com/

# Description
This site is for Turkish Super League fans, Turkish Super League Referees and Turkish Super League Board Members that wants to have more information about the league, referees and players. In this platform users can display the league statistics, referee statistics, and player statistics. In this platform users can rate the referees about their performance so that they can contribute to the Turkish Super League referee assignments. In this platform Board Members can see the referee ratings in this website and Board Members can assign referees to upcoming matches. Referees can see the matches that they've been assigned easily. MFGA is a MERN application. Fronetend is built with React.js, backend is built with Javascript, Express.js and MongoDB.  


# User Documentation
## How to install and run the software
There isn't any installation neeeded for accessing the website. You can simply access the website by this link https://mfga.herokuapp.com/.

## How to report a bug
If you spot a bug and want to inform us about it. You can go to the issues page in github and create a new issue.

## Known bugs
 There isn't any known bugs.
 
# Developer Documenation
## Obtaining source code
Clone the repository directly from github, frontend and backend repositories are at the same repository.

## Layout of files
### Project mainly divided in two parts frontend and backend
Frontend is in the folder called client.
Backend is in the root directory.
### Project is made using MERN stack:
- Mongo DB
- Express JS
- React JS
- Node JS

## The Structure of Main Folder(Backend):

### controllers folder
-  These hold all of the callback functions that each route will call
### models folder
- Contains the mongoose models
- For example, user.js is created for user model

### routers folder
- Contains all the CRUD operation implementations
- For example, refereeRoutes.js contains the crud operations for referee related pages

### middleware folder 
- Contains the authentication part for backend

### server.js file
- the file that backend runs on

## The Structure of the Client Folder(Frontend):

### src folder
- Contains all the files that were used while coding the frontend of the website
- It contains the following folders and files 

### components folder
- Includes the some general components of the project
- example: Navbar, footer

### Pages folder
- Contains the implementations of all the pages of the website
- example: Homepage, Login, Profile

### Routers.js file
- contains all the routes that our website has
- example: root '/referees' for the general referee page

### App.js file 
- The file that frontend runs on

## How to build
to build the app
open one terminal at root directory and enter
```
cd client
```
after that
```
npm run build
```
now, you built the app

## How to deploy
to run the website locally:
open one terminal at root directory and enter

```
npm install
nodemon server.js
```

open one terminal at client folder and enter the codes in order

```
cd client
npm install
npm start
```
(npm install) installs the required packages for running the website

to deploy the website on remote server (Heroku domain):
First of all, go to client folder and build the project with npm command.
```
cd client
npm run build
```
In this way the build folder properly filled and executed by heroku

Authenticate Heroku account by using following command on terminal located on project folder
```
heroku login
```

Than create a domain by clicking on the New button placed top-right edge of the heroku dashboard.

![Ekran Görüntüsü (201)](https://user-images.githubusercontent.com/88709260/207692211-c4ffa311-709a-444a-93e9-e222c3d47938.png)

After creation of the domain, give references to github account and press deploy button. For proper deployment choose the branch you want to deploy and press deploy button.
