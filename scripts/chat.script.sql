--Tables for Chat Database
CREATE TABLE "chat" (
  "id_chat" integer PRIMARY KEY,
  "id_user" integer,
  "id_client_service" integer,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "message_chat" (
  "id_chat_message" integer PRIMARY KEY,
  "id_chat" integer,
  "id_user" integer,
  "emited_at" timestamp,
  "content" varchar
);

ALTER TABLE "message_chat" ADD FOREIGN KEY ("id_chat") REFERENCES "chat" ("id_chat");
