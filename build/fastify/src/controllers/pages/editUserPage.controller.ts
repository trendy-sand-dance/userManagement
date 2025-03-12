import { FastifyRequest, FastifyReply } from 'fastify';

export async function getEditPage(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	return reply.view("edit", { title: "Edit" });
}