export async function getLoginPage(request, reply) {
		return reply.view("login", { title: "Login" });
};