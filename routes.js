let users = require('./controller/users')
let auth = require('./controller/auth')

async function routes (fastify, options) {

    //Route Ujicoba
    fastify.get('/', function (request, reply) {
        reply.send({message: 'Hello World', code: 200})
    })

    //User Register
    fastify.post('/api/users/register', users.register)
    //User Login
    fastify.post('/api/users/login', users.login)

    // Get Token
    fastify.post('/api/token', auth.createToken)
    // Check Token
    fastify.post('/api/token/check', auth.checkToken)

}

fastify.route({
    method: 'GET',
    url: '/api/todo',
    preHandler: async function (request, reply, done) {
        await middleware.check(request, reply)
        done()
    },
    handler: todo.get
})

fastify.route({
    method: 'GET',
    url: '/api/todo/:id',
    preHandler: async function (request, reply, done) {
        await middleware.check(request, reply)
        done()
    },
    handler: todo.show
})

fastify.route({
    method: 'POST',
    url: '/api/todo',
    preHandler: async function (request, reply, done) {
        await middleware.check(request, reply)
        done()
    },
    handler: todo.store
})

fastify.route({
    method: 'PUT',
    url: '/api/todo',
    preHandler: async function (request, reply, done) {
        await middleware.check(request, reply)
        done()
    },
    handler: todo.update
})

fastify.route({
    method: 'DELETE',
    url: '/api/todo',
    preHandler: async function (request, reply, done) {
        await middleware.check(request, reply)
        done()
    },
    handler: todo.destroy
})

module.exports = routes