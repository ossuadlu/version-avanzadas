import express from 'express'
 export let rutas=express.Router()
//DEFINO RUTAS

//RUTAS PARA LOS SERVICIOS DE HABITACION
//1. SERVICIO AGREGAR HABITACION

rutas.post('/api/v1/habitaciones/', function (req, res) { 
    res.send('Hello World')
  })
  //2. SERVICIO PARA BUSCAR TODAS LAS HABITACIONES
  rutas.get('/api/v1/habitaciones/', function (req, res) { 
    res.send('Hello World')
  })
  //3.

//RUTAS PARA LOS SERVICIOS DE RESERVA
