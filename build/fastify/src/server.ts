import fastify from 'fastify';

const app = fastify({logger: { level: 'error' }});

const PORT = 3000;
const HOST = '0.0.0.0';

// run the server
app.listen({ port:PORT, host:HOST }, (err) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at host: ${HOST} port: ${PORT}`);
});
