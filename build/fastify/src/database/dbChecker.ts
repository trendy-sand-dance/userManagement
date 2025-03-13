import { FastifyRequest, FastifyReply } from 'fastify';

export async function dbChecker(
	request: FastifyRequest, reply: FastifyReply): Promise<void> {
		console.log("DB instance: ", request.server.db);
		if (!request.server.db) {
			return reply.status(500).send({error: "database not gooci"});
		}

	const db = request.server.db;
	const query = `SELECT * FROM userTable`;
	const userTable = db.prepare(query).all();
	
	console.log(userTable);
	return reply.send({ message: "Someone is checking out the db..." });
}