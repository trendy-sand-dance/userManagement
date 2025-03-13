// imports
import Fastify from "fastify";
//import Fastify, { FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import dbConnector from './database/dbConnector';
import routes from './routes/routes';
import fastifyFavicon from "fastify-favicon";

import path from 'path';
import view from '@fastify/view';
import ejs from 'ejs';
const __dirname = import.meta.dirname;

const app =  Fastify();

// initialisation
app.register(dbConnector);
console.log("Database connected and registered");
app.ready(() => {
	console.log("Fastify instance keys after registering dbConnector:", Object.keys(app));
  });
app.register(routes);
const PORT = 3000;
const HOST = '0.0.0.0';

app.register(fastifyFavicon, {
	path: path.join(__dirname, 'public', '') // Path to your favicon file
});

app.register(view, {
	engine: {
		ejs: ejs,
	},
	root: path.join(__dirname, "views"),
	viewExt: "ejs",
});

async function startServer() {
	try {
	  await app.listen({ port: PORT, host: HOST });
	  console.log(`Server listening at host: ${HOST} port: ${PORT}`);
	} catch (err) {
		console.error(err);
	  app.log.error(err);
	  process.exit(1);
	}
  }
  
startServer();