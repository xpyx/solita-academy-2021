This application is a solution for Solita's Dev Akatemia entrance examination [exercise](https://github.com/solita/dev-academy-2021).

If the link is not working anymore, here is the definition:

    Your task is to implement a name application. The application should have an user interface.
    The user interface can be either a web application or an api. (It can even contain both if you have enough time and enthusiasm.)

    The user interface should provide at least the first one of the following requirements, but again, you’re allowed to implement them all.

    - List names and amounts, order by amount, most popular first
    - List names in alphabetical order
    - Return the total amount of all the names
    - Return the amount of the name given as a parameter
    
    The data for the application is stored in a json file (names.json). The material contains
    the top-10 of both male and female names in Solita. You can use the json file directly as your data source or you can store the data in a database if you wish.

I didn't have time to implement the fourth requirement, but I am pretty pleased how the app came together.

## KEYWORDS:

- Docker
- Docker-compose
- Flyway
- Postgres
- Node.js
- Express.js
- React Native
- Native Base
- Expo

## PREREQUISITES:

- [Docker](https://www.docker.com/products/docker-desktop)
- [XCode](https://developer.apple.com/xcode/) for the iOS simulator
- [Expo](https://github.com/expo/expo-cli) for running the Expo server for the frontend

## STEPS TO START THE APP:

Note: these instructions are for starting the app in the iOS simulator.

Clone the repo

    git clone https://github.com/xpyx/solita-academy-2021.git

In the repo root run 

    mv .env.example .env && mv solitaExpress/.env.example solitaExpress/.env && docker-compose up --build

This will set up the .env files and spin up the following services:

- Postgres database: my-db
- Flyway migrations: my-flyway
- Node Express web server: solita-backend

When you see `my-flyway exited with code 0` all services are functional. Be patient, it might take a while :)

Open up another window for your shell and cd to the solitaFrontend directory.

    cd solitaFrontend
    
If you don't have expo-cli installed, now would be the perfect time to do it

    npm i expo-cli

After the install, run
    
    expo start -c

This should start the Expo server and open a window in your browser at `http://localhost:19002/`. In this window select `Run on iOS simulator`

This will start the iOS simulator and you can use the application.

This application is tested with the XCode 11 iOS Simulator.

Here is a screen capture video of the whole process.

[![How to start this application](https://img.youtube.com/vi/qkDK1kZ4PvY/0.jpg)](https://www.youtube.com/watch?v=qkDK1kZ4PvY
 "Solita Dev Academy 2021 programming assignment")

PS. I tried to get the frontend run with the docker-compose, but unfortunately there is a [flaw](https://github.com/expo/expo-cli/issues/866) in Expo at the moment and because of that I couldn't find the solution for this.
