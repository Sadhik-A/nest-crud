
import { drizzle } from "drizzle-orm/mysql2";
import * as mysql from "mysql2/promise";

export const Database = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb",
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
  });

  await connection.connect();

  return drizzle(connection);
};

export default Database;
