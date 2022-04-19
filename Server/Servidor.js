//IMPORTO PAQUETE EXPRESS
//const express = require('express') forma antigua

import express from 'express'
import{rutas} from '../routes/rutas.js'

 export class Servidor{
    constructor(){

    //atributo app donde almaceno la funcionalidad express

        this.app = express()
        this.atenderServicios()

    }

    encenderServidor(){
        this.app.listen(process.env.PORT, function(){
            console.log("Servidor encendido "+process.env.PORT)
        })
    }

    atenderServicios(){

        this.app.use('/',rutas)
        
    }

    conectarConDB(){}


}