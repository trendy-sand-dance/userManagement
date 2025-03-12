// imports
import Fastify, { FastifyInstance, FastifyReply, FastifyRequest} from "fastify";
import routes from './routes/routes';
//import dbConnector from './database/dbConnector';
//import formbody from '@fastify/formbody';
//import fastifyFavicon from "fastify-favicon";
//import fastifyStatic from '@fastify/static';

//import path from 'path';
//import view from 'view';
//import ejs from 'ejs';
//const __dirname = import.meta.dirname;

//declare module 'fastify' {
//    interface FastifyInstance {
//        db: any; // Assuming 'db' is attached to the server instance
//    }
//}

const app: FastifyInstance = Fastify();

// initialisation
app.register(routes);
//app.register(dbConnector);
//console.log("Database connected and registered");
//app.register(formbody);
const PORT = 3000;
const HOST = '0.0.0.0';

//app.register(fastifyFavicon, {
//	path: path.join(__dirname, 'public', '') // Path to your favicon file
//  });

//app.register(fastifyStatic, {
//	root: path.join(__dirname, "public"),
//	prefix: "/public/",
//});

//app.register(view, {
//	engine: {
//		ejs: ejs,
//	},
//	root: path.join(__dirname, "views"),
//	viewExt: "ejs",
//});

// run server
//app.listen({ port: PORT, host: HOST }).then(() => {
//	console.log(`Server listening at host: ${HOST} port: ${PORT}`);
//	}).catch((err: Error) => {
//	app.log.error(err);
//	process.exit(1);
//});

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