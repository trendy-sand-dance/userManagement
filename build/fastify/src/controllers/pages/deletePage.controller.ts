import { FastifyRequest, FastifyReply } from 'fastify';

export async function getDeletePage(request: FastifyRequest, reply: FastifyReply): Promise<void> {
	return reply.view("delete", { title: "Delete" });
}