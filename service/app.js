const Hapi = require("hapi")
const db = require("mongoose")
const config = require("./config")
const routes = require("./routes")
const pluginHapiSwagger = require("./plugins/hapi-swagger.js")

const dbUri = `mongodb://${config.dbuser}:${config.dbpwd}@ds028559.mlab.com:28559/service-learning`

const server = new Hapi.Server()

server.connection({
    port: config.port,
    host: config.host,
})

const init = async () => {
    await server.register([
        ...pluginHapiSwagger
    ])

    server.route([
        ...routes
    ])

    await server.start();
    console.log(`Server running at: ${server.info.uri}`)
}

db.connect(dbUri, { useNewUrlParser: true })
db.connection.once("open", () => {
    console.log("connected to database")
    init();
})