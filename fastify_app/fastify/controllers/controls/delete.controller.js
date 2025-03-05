export async function deleteUser(request, reply) {
	const { username, password } = request.body;
	if (!username || !password) {
		return reply.send({error: "All fields are required"});
	}
	try {
		console.log("username: " + username);
		console.log("password: " + password);
		
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}

		const stmt = db.prepare("DELETE FROM userTable WHERE username = ? AND password = ?");
		const result = stmt.run(username, password);
		console.log("User deleted: " + username);
		return reply.send({ message: `User successfully deleted: ${username}` });
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "User deletion failed" });
	}
};