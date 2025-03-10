dashboard.ejs:

	<% if (flashMess && flashMess.length > 0) { %>
		<p><%= flashMess[0] %></p>
	<% } %>

dash controller:

	const flashMess = reply.flash('flashMess');
	return reply.view('dashboard', { flashMess });

login controller:

	request.flash('flashMess', [`User logged in successfully: ${username}`]);
	reply.redirect('/dashboard');