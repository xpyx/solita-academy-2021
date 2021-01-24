## PREREQUISITES:

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

[![How to start this application](http://img.youtube.com/vi/qkDK1kZ4PvY/0.jpg)](https://www.youtube.com/watch?v=qkDK1kZ4PvY
 "Solita Dev Academy 2021 programming assignment")

PS. I tried to get the frontend run with the docker-compose, but unfortunately there is a [flaw](https://github.com/expo/expo-cli/issues/866) in Expo at the moment and because of that I couldn't find the solution for this.
