// imports
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import formbody from "@fastify/formbody";
import favicon from "@fastify/favicon";
import fastifyStatic from "fastify-static";

import fastifyView from "@fastify/view";
import path from 'path';
const __dirname = import.meta.dirname;

import routes from "./routes/routes.ts";
import dbConnector from "./database/dbConnector.js";


// initialisation
const app: FastifyInstance = Fastify({logger: { level: 'error' }});
app.register(formbody);
app.register(routes);
app.register(dbConnector);
console.log("Database connected and registered");
const PORT = 3000;
const HOST = '0.0.0.0';

app.register(favicon, {
	path: path.join(__dirname, 'public', 'favicon.ico') // Path to your favicon file
  });

app.register(fastifyStatic, {
	root: path.join(__dirname, "public"),
	prefix: "/public",
});

app.register(fastifyView, {
	engine: {
		ejs: require('ejs')
	},
	root: path.join(__dirname, "views"),
	viewExt: "ejs",
});


app.listen({ port:PORT, host:HOST }, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1);
	}
	console.log(`Server listening at host: ${HOST} port: ${PORT}`);
});
