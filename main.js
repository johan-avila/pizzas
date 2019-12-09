// TEXTO ----------
let nombre = document.getElementById("Nombre")
let Direccion = document.getElementById("CalleyNumero")

// Sabores-----

let saborhawaianaCON = "Hawaiana con Piña"
let saborhawaianaSIN = "Hawaiana sin Piña"
let saborPeperoni = "Peperoni"
let saborVegana = "Vegana"
let saborPapa = "Papa"
let saborMexicana = "Mexicana"
let caritaFeliz = "UuU"
let caritaTriste = "UmU"
// ---------------------BOTON_ORDENAR
let conPiña = document.getElementById("conpiñaa")
let sinPiña = document.getElementById("sinpiña")

let peperoni = document.getElementById("peperoni")
let vegana = document.getElementById("vegana") 

let papa = document.getElementById("papa")
let mexicana = document.getElementById("mexicana")
// ---------------------TARJETA_ORDEN
let CajaNombre = document.getElementById("cajaNombre")
let CajaDireccion = document.getElementById("cajaDireccion")
let CajaIngredientes = document.getElementById("cajaIngredientes")
let Carita = document.getElementById("caritapiñosa")


const facturaHCON = () => {

    cajaNombre.innerHTML = "Nombre" + " " + nombre.value
    CajaDireccion.innerHTML = "Direccion" + " " + Direccion.value
    CajaIngredientes.innerHTML = saborhawaianaCON
    Carita.innerHTML = caritaTriste

}

conPiña.addEventListener("click", facturaHCON)

const facturaHSIN = () => {

    cajaNombre.innerHTML = "Nombre" + " " + nombre.value
    CajaDireccion.innerHTML = "Direccion" + " " + Direccion.value
    CajaIngredientes.innerHTML = saborhawaianaSIN
    Carita.innerHTML = caritaFeliz

}

sinPiña.addEventListener("click", facturaHSIN)

const facturaPep = () => {
    cajaNombre.innerHTML = "Nombre" + " " + nombre.value
    CajaDireccion.innerHTML = "Direccion" + " " + Direccion.value
    CajaIngredientes.innerHTML = saborPeperoni
    Carita.innerHTML = ""
}
peperoni.addEventListener("click", facturaPep)


const facturaveg = () => {
    cajaNombre.innerHTML = "Nombre" + " " + nombre.value
    CajaDireccion.innerHTML = "Direccion" + " " + Direccion.value
    CajaIngredientes.innerHTML = saborVegana
    Carita.innerHTML = ""
}
vegana.addEventListener("click", facturaveg)

const FACTURApapa =( )=>{
    
    cajaNombre.innerHTML = "Nombre" + " " + nombre.value
    CajaDireccion.innerHTML = "Direccion" + " " + Direccion.value
    CajaIngredientes.innerHTML = saborPapa
    Carita.innerHTML = ""
}

papa.addEventListener("click", FACTURApapa)

const facturaMEX = ( )=> {
    
    cajaNombre.innerHTML = "Nombre" + " " + nombre.value
    CajaDireccion.innerHTML = "Direccion" + " " + Direccion.value
    CajaIngredientes.innerHTML = saborMexicana
    Carita.innerHTML = ""
}

mexicana.addEventListener ("click", facturaMEX )