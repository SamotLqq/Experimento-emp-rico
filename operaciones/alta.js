import { Usuario } from '../estado.js';

// valida que la clave tenga al menos un caracter o simbolo, al menos un numero y 8 digitos
function validarClave(clave) {
  const regex = /^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*]).{8,}$/;
  return regex.test(clave);
}

// inserta el usuario en el estado y retorna en nuevo estado con el usuario insertado.
function insertarUsuario(e, dni, clave, nombre, sueldo, saldo) {
  let usuario = new Usuario(dni, nombre, sueldo, clave, saldo)
  e.usuarios.push(usuario);
  return e;
}

// devuelve true si el dni no se encuentra registrado, caso contrario false.
function registrable(e, dni) {
  let usuarios = e.usuarios
  usuarios = usuarios.filter((usuario) => {
    return usuario.dni == dni;
  })
  if (usuarios.length > 0) return false
  return true
}

// devuelve true si se puede insertar el nuevo usuario, 0 en caso contrario.
function requisitoInsertar(e, dniAdmin, claveAdmin, dni, clave) {
  if (e.admin.dni == dniAdmin && e.admin.clave == claveAdmin && e.registrados < 300 && registrable(e, dni) && validarClave(clave)) {
    return true
  }
  return false
}

export function alta(e, dniAdmin, claveAdmin, dni, clave, nombre, sueldo, saldo) {
  if (requisitoInsertar(e, dniAdmin, claveAdmin, dni, clave)) {
    e = insertarUsuario(e, dni, clave, nombre, sueldo, saldo);
    e.registrados = e.registrados + 1;
    console.log("Usuario insertado con éxito")
  }
  else {
    console.log("No es posible insertar el usuario")
  }
  return e;
}