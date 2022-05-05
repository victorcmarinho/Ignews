import { Client } from "faunadb";
console.log(process.env.FAUNADB_KEY);

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});
