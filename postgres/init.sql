GRANT ALL PRIVILEGES ON DATABASE solita TO solita;

CREATE TABLE IF NOT EXISTS solita.people ("id"   SERIAL ,
    "name" VARCHAR(255) NOT NULL,
    "amount" INTEGER,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
    PRIMARY KEY ("id"));

INSERT INTO solita.people (id, name, amount, createdAt, updatedAt)
VALUES (1, "Sami Saari", 35, "2021-01-11T20:22:43.921Z", "2021-01-11T20:22:43.921Z")
RETURNING "id","name","amount","createdAt","updatedAt";
