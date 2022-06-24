import { connection } from "../data/baseDataBase";


let dataBrasileira:string = "06/09/1991";
let dataAmericana:string = dataBrasileira.split('/').reverse().join('-');

console.log(dataAmericana) 