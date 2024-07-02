function calcular(Cantidad, valor, Iva) {
    const subtotal = Cantidad * valor;
    const totalConIva = subtotal * (1 + Iva / 100);

    const resultado = {
        CantidadValor: Cantidad,
        Valor: valor,
        IVA: Iva,
        Subtotal: subtotal,
        Valor_IVA: totalConIva
    };
    
    return resultado;
}


function obtenerValores(cantidadTransacciones, valorUnitario, iva) {
    const total = calcular(cantidadTransacciones, valorUnitario, iva);
    
    const resultadoFinal = {
        Cantidad_Transacciones: cantidadTransacciones,
        Valor_Unitario: valorUnitario,
        IVA: iva,
        Valor_Total: total.Valor_IVA  
    };
    
    return resultadoFinal;

}

const cantidadTransacciones = 40;
const valorUnitario = 80;
const iva = 10;

const resultado = obtenerValores(cantidadTransacciones, valorUnitario, iva);
console.log(resultado);




document.addEventListener('DOMContentLoaded',()=>{
    const btagregarproducto = document.getElementById('formulario');

    btagregarproducto.addEventListener('submit', function(event) {
        event.preventDefault();

        const producto = document.getElementById('producto').value;
        const cantidad = document.getElementById('transacciones').value;
        const valorUnitario = document.getElementById('valor').value;
        const plazoPago = document.getElementById('pago').value;
        const tipoPeso = document.getElementById('peso').value;
        const iva = document.getElementById('iva').value;
        const descripcion = document.getElementById('descripcion').value;

        const valorTotal = cantidad * valorUnitario;

        console.log('Producto:', producto);
        console.log('Cantidad:', cantidad);
        console.log('Valor unitario:', valorUnitario);
        console.log('Valor total:', valorTotal);
        console.log('Plazo de pago:', plazoPago);
        console.log('Tipo de peso:', tipoPeso);
        console.log('IVA:', iva + '%');
        console.log('Descripción:', descripcion);
    });

});