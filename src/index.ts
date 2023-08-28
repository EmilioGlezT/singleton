import { DataBase } from './dataBase';



function main(){
    const s1= DataBase.getInstance()
    const s2 = DataBase.getInstance()

    if(s1 === s2){
        console.log("Son las mismas instancias, el singleton funciona ")
    }else{
        console.log("El singleton no funciona")
    }
}
main();