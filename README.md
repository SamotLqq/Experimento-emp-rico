# Experimento-empírico
Funcionalidades básicas de cajero automático.

## Comandos
- node index.js extraccion dni clave monto
- node index.js clave dni actual nueva
- node index.js saldo dni clave
- node index.js alta dni_admin clave_admin dni clave nombre sueldo saldo
- node index.js carga dni_admin clave_admin monto
- node index.js movimientos dni_admin clave_admin dni_consolta desde hasta 

## Observaciones
- Se podrían manipular las personas con una estructura de datos más adecuada a la busqueda y que no represente un costo significativo en la inserción.
- Cuando damos de alta un usuario solo le podemos dar el nombre, se podria mejorar la implementación de esto para que reciba el apellido.
- Se podria mejorar el control de operaciones no válidas para que el usuario sepa que es lo que está fallando.
