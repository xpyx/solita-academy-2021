# solita-academy-2021

Clone the repo

`git clone https://github.com/xpyx/solita-academy-2021.git`

In the repo root run 

`mv .env.example .env && mv solitaExpress/.env.example solitaExpress/.env && docker-compose up --build`

This will spin up

- Postgres database: my-db
- Flyway migrations: my-flyway
- Node web server: solita

You can reach the web server from [localhost:3001](localhost:3001)

TO DO:

- Expo & React Native mobile app frontend