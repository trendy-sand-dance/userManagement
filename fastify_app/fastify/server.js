// imports
import fastify from 'fastify';
import routes from "./routes/routes.js";
import formbody from "@fastify/formbody";
import favicon from 'fastify-favicon'

// view and EJS stuff
import path from "node:path";
import fastifyView from "@fastify/view";
import ejs from "ejs";
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

app.register(fastifyView, {
	engine: {
		ejs,
	},
	root: path.join(__dirname, "views"),
	viewExt: "ejs",
});

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

