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
  //3. SERVICIO PARA BUSCAR POR ID
  rutas.get('/api/v1/habitaciones/id/', function (req, res) { 
    res.send('Hello World')
  //4. SERVICIO PARA CAMBIAR HABITACIONES
  rutas.put('/api/v1/habitaciones/', function (req, res) { 
    res.send('Hello World')
  //5.SERVICIO PARA ELIMINAR HABITACIONES
  rutas.delete('/api/v1/habitaciones/', function (req, res) { 
    res.send('Hello World')
  //6.servicio para ingresar reserva
  rutas.post('/api/v1/reserva/', function (req, res) { 
    res.send('Hello World')
  //7. servicio para buscar reserva por id
  rutas.get('/api/v1/reserva/id/', function (req, res) { 
    res.send('Hello World')
  //8. servicio para editar reserva
  rutas.put('/api/v1/reserva/', function (req, res) { 
    res.send('Hello World')
  //9. servicio para eliminar reserva
  rutas.delete('/api/v1/reserva/', function (req, res) { 
    res.send('Hello World')

//RUTAS PARA LOS SERVICIOS DE RESERVA
