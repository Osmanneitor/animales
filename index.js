let animales = [{ nombre: 'pluto', edad: 9, tipo: 'perro' }, { nombre: 'misu', edad: 5, tipo: 'gato' }, { nombre: 'akuo', edad: 12, tipo: 'pez' }]
const express = require('express');
const app = express();
app.get('/animales',function(req,res){
    let datos= '';
    for(let i = 0;i<animales.length;i++){
     datos+=`<ol><li>${animales[i].nombre}</li><li>${animales[i].edad}</li><li>${animales[i].tipo}</li></ol>`
    }
    res.send(datos)
})
app.get('/sumar-animal',function(req,res){
    let nombre = req.query.nombre;
    let edad = parseInt (req.query.edad);
    let tipo = req.query.tipo;
    let nuevoAnimal={nombre:nombre,edad:edad,tipo,tipo}
    animales.push(nuevoAnimal)
    res.send('<h1>Gracias por dejar tu animal</h1>')
})
app.use(express.static('public'))
app.get('/dejar-animal',function(req,res){
    let nombre = req.query.nombre;
    let edad = parseInt (req.query.edad);
    let tipo = req.query.tipo;
    let nuevoAnimal={nombre:nombre,edad:edad,tipo,tipo}
    animales.push(nuevoAnimal)
    res.send('<h1>Gracias por dejar tu animal</h1>')
})
app.get('/adoptar/:nombre',function(req,res){
    let nombre2= req.params.nombre
    for(let j=0;j<animales.length;j++){
        if(nombre2 === animales[j].nombre){
            animales.splice(j,1)
        }
    }res.send(`<h1>gracias por adoptar a ${nombre2}</h1>`)
}) 
app.get('/animales',function(req,res){})
app.listen(3001)