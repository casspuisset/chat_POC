--Table for Users Database
CREATE TABLE "users" (
  "id_user" integer PRIMARY KEY,
  "firstname" varchar,
  "lastname" varchar,
  "email" varchar,
  "password" varchar,
  "role" varchar,
  "localisation" varchar,
  "birthdate" date,
  "created_at" timestamp,
  "updated_at" timestamp
);