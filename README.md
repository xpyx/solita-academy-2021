# solita-academy-2021

Clone the repo

`git clone https://github.com/xpyx/solita-academy-2021.git`

In the repo root run 

`mv .env.example .env && mv solitaExpress/.env.example solitaExpress/.env && docker-compose up --build`

This will spin up

- Postgres database: my-db
- Flyway migrations: my-flyway
- Node web server: solita
- Expo frontend

This appllication is configured to work with the XCode 11 iOS Simulator.

1. In Expo Developer Tools http://localhost:19002/ set CONNECTION to Local
2. Click Run on iOS simulator
3. Profit