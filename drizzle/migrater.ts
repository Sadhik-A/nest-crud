import { migrate } from "drizzle-orm/mysql2/migrator";
import Database from "../src/db";

async function runMigration() {
  // Create the Drizzle database instance by calling the Database function
  const db = await Database();

  // Pass the Drizzle database instance to the migrate function
  await migrate(db, { migrationsFolder: "./drizzle/migrations" });
}

runMigration();
