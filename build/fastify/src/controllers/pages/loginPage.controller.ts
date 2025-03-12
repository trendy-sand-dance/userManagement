import { FastifyRequest, FastifyReply } from 'fastify';

export async function getLoginPage(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	return reply.view("login", { title: "Login" });
}