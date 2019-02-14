## Trusty Tickets - Client

This is the client for a ticketing app where customers can sell and buy tickets to events. 
A fraud risk is calculated for each ticket and helps customers know which ones are safe to purchase.
Current state is WIP.

## Tech stack
* JavaScript
* React
* Redux
* Material-UI

## Features:
* Sign-up / Log-in page
* Log out button
* Events page 
* Add event button / form 
* Event details with tickets list
* Add ticket button / form 
* Ticket details page

## Description
The app has a login and signup page for customers. 
* Users need to login to create events, tickets and comments. 
* Anybody can view events, tickets and comments, but users need to be logged in to add them.
The main page displays a list of events that have a name, description, picture and start/end date. 
Clicking on an event shows a user to a list of tickets available for that event. 
A ticket has an author, price, description and picture (optional).
Clicking on a ticket shows a user the details of that ticket and which event it's for. On this page customers can also add comments. 
A comment on a ticket has an author and some text. 

## Setup
* The backend (server) of this project must be running for the app to function correctly.
* Install the dependencies using `yarn install`
* Start the server using `yarn start`

## Motivation
My goal is to finish this project as part of effective practice with building and deploying a full stack app.
#####Practice goals:
* Experimenting and learning Material-UI 
* Practising with implementing user stories and styling. 

## License
MIT Licence - Copyright &copy; 2018 - Alina Rusu.

