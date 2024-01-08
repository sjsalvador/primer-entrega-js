const verificarYObtenerNumero = (mensaje) => {
    let numero = Number(prompt(mensaje));
    if (numero > 100) {
        alert("El precio agregado es mayor a 100, lo siento pero no podemos avanzar con el cálculo");
        return null;
    }
    return numero;
};

let producto1 = verificarYObtenerNumero("Ingresar el valor del producto 1, RECUERDE QUE TODOS LOS PRODUCTOS DEBEN VALER MENOS DE 100");
if (producto1 !== null) {
    let producto2 = verificarYObtenerNumero("Ingresar el valor del producto 2, RECUERDE QUE TODOS LOS PRODUCTOS DEBEN VALER MENOS DE 100");
    if (producto2 !== null) {
        let producto3 = verificarYObtenerNumero("Ingresar el valor del producto 3, RECUERDE QUE TODOS LOS PRODUCTOS DEBEN VALER MENOS DE 100");
        if (producto3 !== null) {
            const suma = (x, y, z) => x + y + z;
            const promedio = (x) => x / 3;

            let promedioPrecios = promedio(suma(producto1, producto2, producto3));
            alert(`El promedio de los precios ingresados es: ${promedioPrecios}`);
        }
    }
}