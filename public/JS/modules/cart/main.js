import { cartListTemplate } from "../../templates/fragments.templates.js" 
//const cart = JSON.parse(localStorage.cart||"0") || []

// let cart = []
// if( localStorage.cart ){
//     cart = JSON.parse(localStorage.cart)
// }
// else{
//     cart = []
// }

const cart = localStorage.cart? JSON.parse(localStorage.cart) : []
renderCart()


//TODO -> precargar los datos desde el localStorage y guardarlos nuevamente ante los cambios
//foto, nombre, precio, cantidad y subtotal

function renderCart(){
    const total = cart.reduce( (acc, producto)=>{ 
        return acc+producto.subtotal 
    }, 0 )

    // let total = 0 
    // cart.forEach( producto=>{
    //     total +=producto.subtotal
    // } )

    document.querySelector("#cartList").innerHTML = cartListTemplate({cart, total})
}


function updateStorage(){
    localStorage.cart = JSON.stringify(cart)
}


function updateState(){
    renderCart()
    updateStorage()
}

function deleteItems() {
    localStorage.clear();
  }


  //addCartBtn
document.body.addEventListener("click", async ev => {
    const element = ev.target.closest(".addCartBtn")
    if(element){
        ev.preventDefault()
        const idProducto = element.getAttribute("idProducto")

        //const found = cart.find( (producto)=>{ return producto.id === idProducto } )
        const found = cart.find( producto=>producto._id == idProducto )
        if(found){
            found.cantidad++
            found.subtotal = found.price * found.cantidad
        }
        else{
            const response = await fetch("http://localhost:8080/api/products/"+idProducto, 
            )
            const producto = await response.json()
            producto.cantidad = 1
            producto.subtotal = producto.price
            
            cart.push(producto)
        }
        
        //renderCart()
        updateState()

    }
})


//subtractCartBtn
document.body.addEventListener("click", async ev => {
    const element = ev.target.closest(".subtractCartBtn")
    if(element){
        ev.preventDefault()
        const idProducto = element.getAttribute("idProducto")
        const found = cart.find( producto=>producto._id == idProducto )
        if(found){
            found.cantidad = found.cantidad > 0 ?  found.cantidad-1 : 0 
            found.subtotal = found.price * found.cantidad
        }
        // renderCart()
        // updateStorage()
        updateState()

    }
})

//deleteLocalStorage
document.body.addEventListener("click", async ev => {
    const element = ev.target.closest(".deleteLocalStorage")
    deleteItems()
})



//Mostrar / Ocultar 
document.querySelector("#cartBtn").addEventListener("click", ev => {
    document.querySelector("#cartList").classList.toggle("show")
})

document.body.addEventListener("click", ev=> {
    const element = ev.target.closest(".search-bar__carrito-container")

    if(!element){
        console.log("Cerrar - Afuera")
        //document.querySelector("#cartList").classList.remove("show")
    }
})

document.body.addEventListener("keydown", ev => {
    console.log(ev)
    if(ev.key === "Escape"){
        document.querySelector("#cartList").classList.remove("show")
    }
})

//document.querySelector("#cartList .closeBtn").addEventListener("click", ev=> {
document.body.addEventListener("click", ev=> {
    const element = ev.target.closest("#cartList .closeBtn")
    if(element){
        document.querySelector("#cartList").classList.remove("show")
    }
})



document.body.addEventListener("click", ev=>{
    const element = ev.target.closest(".deleteProduct")
    if(element){
        ev.preventDefault()
        const idProducto = element.getAttribute("idProducto")

        const found = cart.find(producto => producto._id == idProducto)
        if(found){
            cart.splice(found,1)
        }
        updateState()
    }
})