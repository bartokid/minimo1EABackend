import {Request, Response, json, NextFunction} from 'express';
import ResClinico from '../models/resClinico';
import {Schema, model} from 'mongoose';


async function addRandomResClinico(res:Response){
    let nombre = "Resultado Random " + randomInt();
    let idMuestra =randomInt();
    let fechaResultado:Date = new Date("2020-04-24");
    let resultado = "Fake Result";
    let tipoTest = [1];
    var newResClinico = new ResClinico({nombre,idMuestra,fechaResultado,resultado,tipoTest});
    await newResClinico.save().then((data)=>{
        res.status(201).json('data');
    }).catch((err)=>{
        res.status(409).json(err);
    })
}

function randomInt(){
    return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
 }


async function getResClinicos(req: Request, res: Response){
    let busqueda = await ResClinico.find();
    if(busqueda != null){
        res.send(busqueda);
    }else{
        res.send('No se han encontrado resultados Clínicos')
    }
}

async function updateResClinico(req:Request, res:Response){
    const _id = req.body._id;
    let nombre = req.body.nombre;
    let idMuestra = req.body.idMuestra;
    let fechaResultado = req.body.fechaResultado;
    let resultado = req.body.resultado;
    let tipoTest = req.body.tipoTest;
    var resClinicoAModificar = ResClinico.findOneAndUpdate({'_id': _id}, {
            'nombre':nombre,
            'idMuestra':idMuestra,
            'fechaResultado': fechaResultado,
            'resultado':resultado,
            'tipoTest':tipoTest
        });
    resClinicoAModificar.exec(function (err, result) {
            if (err){
                res.status(404).json(err);
            }else{
                res.status(200).json(result);
            }});
}



export default {getResClinicos, updateResClinico, addRandomResClinico};