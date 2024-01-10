const fs = require("fs")
const path = require('path')
const mensajeLogs = path.join(__dirname,'../logs/userLogs.txt')

const logMiddleware = (req, res, next) => {
    fs.appendFileSync(mensajeLogs, `El usuario ingresó a la ruta: ${req.url}\n`);
    next();
};

module.exports = logMiddleware