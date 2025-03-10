export async function getEditPage(request, reply) {
	return reply.view("edit", { title: "Edit" });
};
