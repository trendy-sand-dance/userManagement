import Fastify, { FastifyInstance, FastifyReply, FastifyRequest} from "fastify";

const fastify: FastifyInstance = Fastify({logger: { level: 'error' }});

interface HelloResponse {
	message: string;
}

fastify.get("/", async (request: FastifyRequest, reply: FastifyReply): Promise<HelloResponse> => {
	return { message: "hello fastify!!" };
});

const start = async () => {
	try {
		await fastify.listen({port: 3000 });
		console.log("server running at http://localhost:3000");
	}
	catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();