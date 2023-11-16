import { mysqlTable, varchar,bigint } from "drizzle-orm/mysql-core";

export const newusers=mysqlTable('newusers',{
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
  name: varchar('name', { length: 256 }),
})