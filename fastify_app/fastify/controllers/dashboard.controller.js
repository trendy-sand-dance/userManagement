export async function getDashboard(request, reply) {
	const flashMess = reply.flash('flashMess');
	return reply.view('dashboard', { flashMess });

	//const db = request.server.db;
	//const query = `SELECT * FROM userTable`;
	//const userTable = db.prepare(query).all();
	//return reply.view("dashboard", { title: "Dashboard", userTable });
};