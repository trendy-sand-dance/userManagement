export async function getLogin(request, reply) {
		return reply.view("login", { title: "Login" });
	//const { username, password } = request.body;
	//if (!username || !password) {
	//	return reply.view("login", { title: "Login" });	}
	//try {
	//	console.log("username: " + username);
	//	console.log("password: " + password);

	//	const db = request.server.db;
	//	if (!db) {
	//		console.error("Database is not initialized");
	//		return reply.send({ error: "Database connection error"});
	//	}
	//	// check login details against database table
	//	//const stmt = db.prepare("")
	//}
	//catch (err) {
	//	console.log(err);
	//	return reply.view("login", { title: "Login" });
	//}
};
