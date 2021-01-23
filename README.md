# solita-academy-2021

Prerequisites:

- [XCode](https://developer.apple.com/xcode/)
- [Expo](https://github.com/expo/expo-cli)

Clone the repo

`git clone https://github.com/xpyx/solita-academy-2021.git`

In the repo root run 

```mv .env.example .env && mv solitaExpress/.env.example solitaExpress/.env && mv solitaFrontend/.env.example solitaFrontend/.env docker-compose up --build```

This will spin up

- Postgres database: my-db
- Flyway migrations: my-flyway
- Node Express web server: solita-backend

Open up another window for your shell and

`cd solitaFrontend && expo start -c`

This should start a the Expo server and open a window in your browser at `http://localhost:19002/`. In this window:
- switch `PRODUCTION MODE` on
- switch `CONNECTION` to `Local`
- select `Run on iOS simulator`

This will start the iOS simulator and you can use the application.

This application is tested with the XCode 11 iOS Simulator.

TODO: Link to youtube video of the application in action.
