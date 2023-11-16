import 'dotenv/config';
import type { Config } from 'drizzle-kit';
 
export default {
	schema: './src/drizzle/schema',
	out: './drizzle/migrations',
	driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	dbCredentials: {
	host: "localhost",
    user: "root",
    password: "password",
    database: "mydb",
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
	},
} satisfies Config;