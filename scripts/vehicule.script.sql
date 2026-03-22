--Tables for Vehicule Database
CREATE TABLE "vehicule" (
  "id_vehicule" integer PRIMARY KEY,
  "agency_id" integer,
  "category_id" integer,
);

CREATE TABLE "agency" (
  "id_agency" integer PRIMARY KEY,
  "agency_name" varchar,
  "localisation" varchar
);

CREATE TABLE "vehicule_category" (
  "category_id" integer PRIMARY KEY,
  "category" varchar,
  "type" varchar,
  "transmission" varchar,
  "fuel" varchar
);

ALTER TABLE "vehicule" ADD FOREIGN KEY ("category_id") REFERENCES "vehicule_category" ("category_id");

ALTER TABLE "vehicule" ADD FOREIGN KEY ("agency_id") REFERENCES "agency" ("id_agency");
