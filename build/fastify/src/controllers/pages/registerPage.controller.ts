import { FastifyRequest, FastifyReply } from 'fastify';

export async function getRegisterPage(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	return reply.view("register", { title: "Register"} )
}