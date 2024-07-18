export default class GrupoPersonas{
    constructor(){
        this.SIGLAS_GENERO=["M","F"]
        this.contMujeres=0;
        this.acuIngresoMujeres=0;
        this.mayorIngresoMujer=0;
        this.nombreMayorIngresoMujer="";
    }

    procesarPersona(persona){
        if( persona.sexo.toUpperCase() === this.SIGLAS_GENERO[1]){
            this.contMujeres++
            this.acuIngresoMujeres+=persona.ingreso
            if(persona.ingreso>this.mayorIngresoMujer){
                this.mayorIngresoMujer=persona.ingreso
                this.nombreMayorIngresoMujer=persona.nombre
            }
        }
    }

    promedioIngresoMujer(){
        return this.acuIngresoMujeres/this.contMujeres

    }

}