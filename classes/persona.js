export default class Persona{
    constructor(sexo, nombre, ingreso){
        this.sexo=sexo;
        this.nombre=nombre;
        this.ingreso=ingreso;
    }

    set sexo(s){
        this._sexo=s
    }
    get sexo(){
        return this._sexo
    }
    set nombre(n){
        this._nombre=n
    }
    get nombre(){
        return this._nombre
    }
    set ingreso(ing){
        this._ingreso=+ing
    }
    get ingreso(){
        return this._ingreso
    }

}