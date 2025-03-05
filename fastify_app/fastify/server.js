// imports
import fastify from 'fastify';
import routes from './routes/routes.js';
import formbody from '@fastify/formbody';
// browser icon
import favicon from 'fastify-favicon'
// browser flash messages
import secureSession from '@fastify/secure-session'
import flash from '@fastify/flash'

// view and EJS stuff
import path from 'node:path';
import fastifyView from '@fastify/view';
import ejs from 'ejs';
const __dirname = import.meta.dirname;

// static fastify
import fastifyStatic from "@fastify/static";

// database
import dbConnector from "./database/dbConnector.js";

// initialisation
const app = fastify({logger: { level: 'error' }});

const PORT = 3000;
const HOST = '0.0.0.0';

app.register(dbConnector);
console.log("Database connected and registered");
app.register(formbody);
app.register(routes);
app.register(favicon);

// for browser flash messages (need secure-session plugin and key)
// from key.txt using command: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
const KEY = '1dc6217d3097965178493c93697c0dafb6f357c81491329b959a89d8d6d78e44'
app.register(secureSession, {
	key: Buffer.from(KEY, 'hex'),
	cookie: {
		secure: process.env.NODE_ENV === 'production'
	}
});

app.register(fastifyView, {
	engine: {
		ejs: ejs,
	},
	root: path.join(__dirname, "views"),
	viewExt: "ejs",
});

app.register(flash);

app.register(fastifyStatic, {
	root: path.join(__dirname, "public"),
	prefix: "/public",
});

// run the server
app.listen({ port:PORT, host:HOST }, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at host: ${HOST} port: ${PORT}`);
});

