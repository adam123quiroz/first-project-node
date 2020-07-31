const config = {
    dbUrl: process.env.DB_URL ||
        'mongodb+srv://db-user-node:Arqui2020@cluster0.ldkl9.mongodb.net/node-db?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    fileRoute: process.env.FILE_ROUTE || 'files'
}

module.exports = config;