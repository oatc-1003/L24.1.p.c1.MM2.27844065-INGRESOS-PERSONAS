// 7. INGRESOS PERSONAS
// Dado el nombre, sexo (F-M) y el ingreso de varias personas. Determinar e imprimir:
// promedio de ingreso de las mujeres y el monto de ingreso mayor y quien lo tiene.
// Se dispone de los siguientes datos de varias personas: (nombre, sexo, ingreso) (Mary, F,
// 150), (José, M, 135), (Carlos, M, 160), (Pedro, M, 75), (Rosa, F, 120), (Carmen, F, 120)
// Promedio de ingreso de las mujeres: 130
// Nombre de la persona con mayor ingreso: Mary con un ingreso de 150$

import GrupoPersonas from "./classes/grupoPersonas.js";
import Persona from "./classes/persona.js";

let _persona1=new Persona("F","Mary",150)
let _persona2=new Persona("M","Jose",135)
let _persona3=new Persona("M","Carlos",160)
let _persona4=new Persona("M","Pedro",75)
let _persona5=new Persona("F","Rosa",120)
let _persona6=new Persona("F","Carmen",120)

let _grupo=new GrupoPersonas()

_grupo.procesarPersona(_persona1)
_grupo.procesarPersona(_persona2)
_grupo.procesarPersona(_persona3)
_grupo.procesarPersona(_persona4)
_grupo.procesarPersona(_persona5)
_grupo.procesarPersona(_persona6)

document.body.innerHTML=`
<br>
Promedio de ingreso de las mujeres: ${_grupo.promedioIngresoMujer()}
<br>
Nombre de la persona con mayor ingreso: ${_grupo.nombreMayorIngresoMujer} con un ingreso de ${_grupo.mayorIngresoMujer}$
`