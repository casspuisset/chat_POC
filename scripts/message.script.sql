--Tables for Message Database
CREATE TABLE "message" (
  "id_message" integer PRIMARY KEY,
  "id_conversation" integer,
  "id_user" integer,
  "content" varchar,
  "emited_at" timestamp
);

CREATE TABLE "conversation" (
  "id_conversation" integer,
  "emited_user" integer,
  "destination_user" integer
);

ALTER TABLE "message" ADD FOREIGN KEY ("id_conversation") REFERENCES "conversation" ("id_conversation");
