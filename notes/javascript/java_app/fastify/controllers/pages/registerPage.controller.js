export async function getRegisterPage(request, reply) {
	return reply.view("register", { title: "Register"} )
}