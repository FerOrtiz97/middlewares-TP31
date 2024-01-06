const servicesControllers = {
    services: (req, res) => {
        res.send('Bienvenido a services')
    },
    design: (req, res) => {  
        res.send('Bienvenido a design');
    }
}

module.exports = servicesControllers