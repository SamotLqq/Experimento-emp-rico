import { Usuario } from '../estado.js';
import { validarClave } from '../comunes/validarClave.js'
import { obtenerUsuario } from '../comunes/obtenerUsuario.js'
const MAX_REG = 300

// devuelve true si se puede insertar el nuevo usuario, 0 en caso contrario.
function requisitoInsertar(e, dniAdmin, claveAdmin, dni, clave, nombre, sueldo, saldo) {
  if (e.admin.dni == dniAdmin && e.admin.clave == claveAdmin && e.registrados < MAX_REG && !obtenerUsuario(e, dni) && validarClave(clave) && nombre !== undefined && sueldo >= 0 && saldo >= 0 ) {
    return true
  }
  return false
}

// inserta el usuario en el estado y retorna en nuevo estado con el usuario insertado.
function insertarUsuario(e, dni, clave, nombre, sueldo, saldo) {
  let usuario = new Usuario(dni, nombre, sueldo, clave, saldo)
  e.usuarios.push(usuario);
  return e;
}

export function alta(e, dniAdmin, claveAdmin, dni, clave, nombre, sueldo, saldo) {
  dni = Number(dni)
  sueldo = Number(sueldo)
  saldo = Number(saldo)
  if (requisitoInsertar(e, dniAdmin, claveAdmin, dni, clave, nombre, sueldo, saldo)) {
    e = insertarUsuario(e, dni, clave, nombre, sueldo, saldo);
    e.registrados = e.registrados + 1;
    console.log("Usuario insertado con éxito")
  }
  else {
    console.log("No es posible insertar el usuario")
  }
  return e;
}