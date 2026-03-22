--Tables for Reservation Database
CREATE TABLE "reservation" (
  "id_reservation" integer PRIMARY KEY,
  "id_vehicule" integer,
  "id_user" integer,
  "id_payment" integer,
  "cost" decimal,
  "status" varchar,
  "rental_date" date,
  "return_date" date,
  "departure_city" varchar,
  "return_city" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "payment" (
  "id_payment" integer PRIMARY KEY,
  "stripe_payment_intent_id" varchar,
  "stripe_customer_id" varchar,
  "amount" decimal,
  "currency" varchar,
  "status" varchar,
  "payment_method" varchar,
  "receipt_url" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

ALTER TABLE "reservation" ADD FOREIGN KEY ("id_reservation") REFERENCES "payment" ("id_payment");