export async function loginUser(request, reply) {
	const { username, password } = request.body;
	if (!username || !password) {
		return reply.view("login", { title: "Login" }); }
	try {
		console.log("username: " + username);
		console.log("password: " + password);
		
		const db = request.server.db;
		if (!db) {
			console.error("Database is not initialized");
			return reply.send({ error: "Database connection error"});
		}
		const stmt = db.prepare('SELECT * FROM userTable WHERE username = ? AND password = ?');
		const user = stmt.get(username, password);
		if (user) {

			//reply.send({ message: `User logged in successfully: ${username}`});
			request.flash('flashMess', [`User logged in successfully: ${username}`]);
			reply.redirect('/dashboard');
			//const flashMess = reply.flash('flashMess');
			//reply.send({ flashMess });
		}
		else{
			reply.send({ error: "Invalid credentials" });
			reply.redirect("login", { title: "Login" });
		}
	}
	catch (err) {
		console.log(err);
		return reply.view("login", { title: "Login" });
	}
};