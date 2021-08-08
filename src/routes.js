const FileController = require('./controllers/FileController');

module.exports = function (fastify, options, done) {
	// Files
	fastify.get('/files', FileController.index);
	fastify.post('/files', FileController.create);
	fastify.put('/files/:id', FileController.update);
	fastify.delete('/files/:id', FileController.delete);

	done();
}
