require('dotenv').config()

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-formbody'))
fastify.register(require('./routes'), { prefix: '' })

const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000)
        console.log(`Server listening on ${fastify.server.address().port}`)
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()