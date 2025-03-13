// imports
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import dbConnector from './database/dbConnector';
import routes from './routes/routes';
import fastifyFavicon from "fastify-favicon";

// not yet worky
//import formbody from 'formbody';
//import fastifyStatic from 'static';

import path from 'path';
import view from '@fastify/view';
import ejs from 'ejs';
const __dirname = import.meta.dirname;

const app: FastifyInstance = Fastify();

// initialisation
app.register(routes);
app.register(dbConnector);
console.log("Database connected and registered");
const PORT = 3000;
const HOST = '0.0.0.0';

app.register(fastifyFavicon, {
	path: path.join(__dirname, 'public', '') // Path to your favicon file
});

//app.register(formbody);

//app.register(fastifyStatic, {
//	root: path.join(__dirname, "public"),
//	prefix: "/public/",
//});

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