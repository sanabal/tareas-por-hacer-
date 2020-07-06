const opts1 = {
    descripcion: {
        alias: 'd',
        demand: true,
    },

}

const opts2 = {
    descripcion: {
        alias: 'd',
        demand: true,
    },
    completado: {
        alias: 'c',
        default: true
    },

}



const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completo de una tarea', opts2)
    .command('borrar', 'Borrar una tarea', opts1)
    .command('crear', 'Crea un elemento por hacer', opts1)
    .help()
    .argv;





module.exports = {
    argv
}