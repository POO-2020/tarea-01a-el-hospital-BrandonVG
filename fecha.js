class Fecha{
    constructor(dia,mes,año){
        this.fecha= new Date(año, mes-1,dia);
    }
    getFecha(){
        return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
    }
    getAños(){
        
    }
}
let fecha1= new Fecha(7,2,2020)
console.log(fecha1.getFecha());