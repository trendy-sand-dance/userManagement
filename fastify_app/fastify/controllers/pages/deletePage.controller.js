export async function getDeletePage(request, reply) {
	return reply.view("delete", { title: "Delete" });
};
