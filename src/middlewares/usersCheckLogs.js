const fs = require('fs')
const path = require('path')
const mensajeLogs = path.join(__dirname,'../logs/userLogs.txt')
const user= ["Ada", "Greta", "Vim", "Tim"]


function userAdmin (req,res, next) {
    const input = req.body.usuario
    if (user.includes(input)) {
        res.send(`Hola admin ${input}`)
        fs.appendFileSync(mensajeLogs, `El administrador ${req.body.usuario} ha ingresado\n`)
        next();
    } else {
        res.send(`Hola ${input} no tenes privilegio de administrador`)
        fs.appendFileSync(mensajeLogs, `El usuario ${req.body.usuario} no es adminstrador\n`)
    }
}

module.exports = userAdmin;