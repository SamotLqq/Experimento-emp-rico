import { validarClave } from '../comunes/validarClave.js'
import { obtenerUsuario } from '../comunes/obtenerUsuario.js'
import { CambioContr } from '../estado.js';
import { crearFecha } from '../comunes/crearFecha.js'

// el funcionamiento deseado es que si cambio el mes o cambio el año desde la ultima vez que
// cambiaste la contraseña la podes cambiar la contraseña.
function cambioDisponible(ultCambioContr, actCambioContr) {
  if (!actCambioContr) return false // si no se recibió bien el dato.
  let fechaUlt = ultCambioContr.fecha
  let fechaActual = actCambioContr.fecha
  if (!fechaUlt) return true // si todavia no se cambio la contraseña
  else if (!fechaActual) return false // si no se recibió bien el dato.
  if (fechaUlt[1] - fechaActual[1] != 0 || fechaUlt[2] != fechaActual[2]) return true
  else return false
}

export function clave(e, dni, actual, nueva) {
  dni = Number(dni)
  let usuario = obtenerUsuario(e, dni);
  let actCambioContr = new CambioContr(actual, nueva, crearFecha())
  if (usuario && usuario.clave === actual && validarClave(nueva) && cambioDisponible(usuario.ultCambioContr, actCambioContr)) {
    usuario.clave = nueva;
    usuario.ultCambioContr = actCambioContr;
    usuario.movTotales.push(actCambioContr);
    console.log("contraseña actualizada con exito");
  }
  else console.log("no es posible cambiar la contraseña.")
  return e;
}