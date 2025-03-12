import { FastifyRequest, FastifyReply } from 'fastify';

export async function getDashboard(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	//const db = request.server.db;
	//const query = `SELECT * FROM userTable`;
	//const userTable = db.prepare(query).all();
	//return reply.view("dashboard", { title: "Dashboard", userTable });
	return reply.send("dashboard page");
} 