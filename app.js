//importando elpaquete dontev
//require(`dotenv`),config() forma antigua
import 'dotenv/config' 

//importo la clase servidor
import{Servidor} from './Server/Servidor.js'
//creo un objeto de la clase servidor
//los objetos son variables

let servidor=new Servidor()

// llamo al metodo encender servidor

servidor.encenderServidor()


