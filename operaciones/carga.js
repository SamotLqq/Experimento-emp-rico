export function carga(e, dniAdmin, claveAdmin, monto) {
  if (e.admin.dni === dniAdmin && e.admin.clave === claveAdmin && monto) {
    e.fondos = e.fondos + Number(monto)
    console.log("Carga realizada con éxito")
  }
  else console.log("Carga no realizada")
  return e
}