function abrirVentanaCompra(){
    document.getElementById("flotCompra").style.display="block"
    document.getElementById("productos-previewVF").style.display="none"
    
}
function closeCompra(){
    document.getElementById("flotCompra").style.display="none"
    document.getElementById("productos-previewVF").style.display="flex"
}


function abrirVentanaCarrito(){
    document.getElementById("flotCarrito").style.display="block"
    document.getElementById("productos-previewVF").style.display="none"
    
}
function closeCarrito(){
    document.getElementById("flotCarrito").style.display="none"
    document.getElementById("productos-previewVF").style.display="flex"
}
