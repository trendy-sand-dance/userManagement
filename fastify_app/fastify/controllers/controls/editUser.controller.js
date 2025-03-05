export async function editUser(request, reply) {
	const { username, newUsername, password, newPassword } = request.body;
	if (!username || !newUsername || !password || !newPassword) {
		return reply.send({error: "All fields are required"});
	}
	try {
		console.log("username: " + username);
		console.log("new username: " + newUsername);
		console.log("password: " + password);
		console.log("new password: " + newPassword);
		
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error" });
		}

		const stmt = db.prepare("UPDATE userTable SET username = ?, password = ? WHERE username = ? AND password = ?");
		const result = stmt.run(newUsername, newPassword, username, password);
		if (result.changes > 0) {
			console.log("User edited: " + username);
			return reply.send({ message: `User successfully edited from: ${username} to: ${newUsername}` });
		}
		else {
			return reply.send({ error: "No matching user found or no changes made" });
		}
	}
	catch (err) {
		console.log(err);
		return reply.send({ error: "Edit user failed" });
	}
};