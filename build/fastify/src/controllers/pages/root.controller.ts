import { FastifyRequest, FastifyReply } from 'fastify';

export async function getRoot(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	//const db = request.server.db;
	//const query = `SELECT * FROM userTable`;
	//const userTable = db.prepare(query).all();
	//return reply.view("index", { title: "Home", userTable });
	return reply.send("helllooooo index");
};