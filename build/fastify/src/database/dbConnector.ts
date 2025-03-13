import Database from 'better-sqlite3'; 
import fs from 'fs';
import path from 'node:path';
import { FastifyInstance, FastifyPluginOptions } from 'fastify';

// use to check whether database (file) already exists
//const databasePath = path.join(__dirname, '/database.db');
const databasePath = path.join(new URL('.', import.meta.url).pathname, 'database.db');

// -----------------------------------------------//
// build new database table if not already exists
// create database object whether db exists already or not, to use in controller functions
// -----------------------------------------------//
async function dbConnector(fastify: FastifyInstance, options: FastifyPluginOptions): Promise<void> {
	let db;

	if (fs.existsSync(databasePath)) {
		console.log("Database already exists at: ", databasePath);
		db = new Database(databasePath, { verbose: console.log });
	}
	else {
		console.log("Creating new database at: ", databasePath);
		db = new Database(databasePath, { verbose: console.log });

		const query = `
			CREATE TABLE userTable (
				id INTEGER PRIMARY KEY,
				name STRING NOT NULL,
				username STRING NOT NULL UNIQUE,
				password STRING NOT NULL,
				email STRING NOT NULL UNIQUE
			)
		`;

		db.exec(query);
		console.log("Database created successfully!");
	}
	fastify.decorate("db", db);
	fastify.addHook("onClose", (fastify, done) => {
		if (db) {
			db.close();
		}
		done();
	});
};

// default allows for custom name for importing
export default dbConnector;
