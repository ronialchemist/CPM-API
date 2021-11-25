const fastify = require('fastify')({ logger: true })

fastify.register(require('./routes'));

fastify.addHook('preHandler', async (request, reply) => {
  reply.header('Access-Control-Allow-Origin', '*');
});

fastify.listen(3000, err => {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
})
